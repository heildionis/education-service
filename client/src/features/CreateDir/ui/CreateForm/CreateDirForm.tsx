import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { useCreateDir } from '../../api/createDirApi';
import { getCreateDirName } from '../../model/selectors/getCreateDirSelectors';
import { createDirActions, createDirReducer } from '../../model/slice/createDirSlice';

import cls from './CreateDir.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from '@/shared/ui/Button/Button';
import { Card } from '@/shared/ui/Card';
import { Input } from '@/shared/ui/Input/Input';

interface CreateDirFormProps {
    className?: string;
    parentId?: number | null;
    onCreate?: () => void;
}

const reducers: ReducerList = {
    createDir: createDirReducer,
};

export const CreateDirForm: FC<CreateDirFormProps> = memo((props: CreateDirFormProps) => {
    const { className, parentId, onCreate } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const [createDir] = useCreateDir();
    const name = useSelector(getCreateDirName);

    const onChangeName = useCallback((name: string) => {
        dispatch(createDirActions.setName(name));
    }, [dispatch]);

    const onClick = useCallback(async () => {
        const isNotRootDir = parentId !== null && parentId;
        await createDir({
            name,
            parentId: isNotRootDir ? parentId : undefined,
        });
        dispatch(createDirActions.setName(''));

        onCreate?.();
    }, [
        createDir,
        dispatch,
        onCreate,
        name,
        parentId,
    ]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Card className={classNames(cls.CreateDir, {}, [className])}>
                <Input value={name} onChange={onChangeName} fullWidth />
                <Button onClick={onClick}>{t('Создать папку')}</Button>
            </Card>
        </DynamicModuleLoader>
    );
});

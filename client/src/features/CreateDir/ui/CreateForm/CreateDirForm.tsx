import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getCreateDirName } from '../../model/selectors/getCreateDirSelectors';
import { createDir } from '../../model/services/createDir';
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
    const name = useSelector(getCreateDirName);

    const onChangeName = useCallback((name: string) => {
        dispatch(createDirActions.setName(name));
    }, [dispatch]);

    const onClick = async () => {
        const isNotRootDir = parentId !== null && parentId;
        await dispatch(createDir({
            name,
            parentId: isNotRootDir ? parentId : undefined,
        }));
        dispatch(createDirActions.setName(''));

        onCreate?.();
    };

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Card className={classNames(cls.CreateDir, {}, [className])}>
                <Input value={name} onChange={onChangeName} fullWidth />
                <Button onClick={onClick}>{t('Создать папку')}</Button>
            </Card>
        </DynamicModuleLoader>
    );
});

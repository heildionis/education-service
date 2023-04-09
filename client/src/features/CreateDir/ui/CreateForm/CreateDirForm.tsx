import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { createDirActions, createDirReducer } from 'features/CreateDir/model/slice/createDirSlice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';
import { Card } from 'shared/ui/Card';
import { getCreateDirName } from '../../model/selectors/getCreateDirSelectors';
import { createDir } from '../../model/services/createDir';
import cls from './CreateDir.module.scss';

interface CreateDirFormProps {
    className?: string;
    parentId?: number | null;
}

const reducers: ReducerList = {
    createDir: createDirReducer,
};

export const CreateDirForm: FC<CreateDirFormProps> = memo((props: CreateDirFormProps) => {
    const { className, parentId } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const name = useSelector(getCreateDirName);

    const onChangeName = useCallback((name: string) => {
        dispatch(createDirActions.setName(name));
    }, [dispatch]);

    const onClick = () => {
        const isNotRootDir = parentId !== null && parentId;
        dispatch(createDir({
            name,
            parentId: isNotRootDir ? parentId : undefined,
        }));
        dispatch(createDirActions.setName(''));
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

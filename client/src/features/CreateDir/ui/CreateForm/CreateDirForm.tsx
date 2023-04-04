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
import cls from './CreateDir.module.scss';
import {
    getCreateDirName,
    getCreateDirParentId, getCreateDirType,
} from '../../model/selectors/getCreateDirSelectors';
import { createDir } from '../../model/services/createDir';

interface CreateDirFormProps {
    className?: string;
    onCreateDir?: (name: string) => () => void;
}

const reducers: ReducerList = {
    createDir: createDirReducer,
};

export const CreateDirForm: FC<CreateDirFormProps> = memo((props: CreateDirFormProps) => {
    const { className, onCreateDir } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const name = useSelector(getCreateDirName);

    const onChangeName = useCallback((name: string) => {
        dispatch(createDirActions.setName(name));
    }, [dispatch]);

    const onClick = () => {
        onCreateDir?.(name)();
        dispatch(createDirActions.setName(''));
    };

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Card className={classNames(cls.CreateDir, {}, [className])}>
                <Input value={name} onChange={onChangeName} fullWidth />
                <Button onClick={onClick}>Создать папку</Button>
            </Card>
        </DynamicModuleLoader>
    );
});

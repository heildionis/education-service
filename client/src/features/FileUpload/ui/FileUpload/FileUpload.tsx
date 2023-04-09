import {
    ChangeEvent,
    FC,
    memo,
} from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { uploadFile } from 'pages/FilesPage/model/services/uploadFile';
import { fileUploadReducer } from 'features/FileUpload/model/slice/fileUploadSlice';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import cls from './FileUpload.module.scss';

interface FileUploadProps {
    className?: string;
    parentId?: number | null | undefined;
}

const reducers: ReducerList = {
    fileUpload: fileUploadReducer,
};

export const FileUpload: FC<FileUploadProps> = memo((props: FileUploadProps) => {
    const { className, parentId } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const uploadFiles = (e: ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        const files = [...e.target?.files];
        files.forEach((file) => dispatch(uploadFile({ file, parentId })));
    };

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.FileUpload, {}, [className])}>
                <Button
                    className={cls.labelWrapper}
                    color='secondary'
                    variant='clear'
                    isAnimated={false}
                    fullWidth
                >
                    <label
                        htmlFor='fileUpload'
                        className={cls.label}
                    >
                        {t('Загрузить файл')}
                    </label>
                </Button>
                <input
                    onChange={(e) => uploadFiles(e)}
                    multiple
                    className={cls.input}
                    type='file'
                    id='fileUpload'
                />
            </div>
        </DynamicModuleLoader>
    );
});

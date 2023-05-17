import {
    ChangeEvent,
    FC,
    memo,
} from 'react';
import { useTranslation } from 'react-i18next';

import { uploadFile } from '../../model/services/uploadFile';
import { fileUploadReducer } from '../../model/slice/fileUploadSlice';

import cls from './FileUpload.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from '@/shared/ui/Button/Button';

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

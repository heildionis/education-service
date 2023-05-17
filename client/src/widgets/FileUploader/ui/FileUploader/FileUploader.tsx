import axios from 'axios';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './FileUploader.module.scss';

import { FilePreviewList, FilePreviewType } from '@/entities/File';
import { CreateFile } from '@/features/CreateFile';
import { FilePreviewDelete } from '@/features/FilePreviewDelete';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card';
import { Row } from '@/shared/ui/Stack';
import { Typography } from '@/shared/ui/Typography/Typography';

interface FileUploaderProps {
    className?: string;
}

export const FileUploader = memo((props: FileUploaderProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const [uploadProgress, setUploadProgress] = useState<FilePreviewType>({});
    const [files, setFiles] = useState<File[]>([]);

    const onUpload = useCallback((files: File[]) => {
        for (let i = 0; i < files.length; i += 1) {
            const file = files[i];

            axios.post(`${__API__}/`, file, {
                onUploadProgress: (e) => {
                    if (!e.total) {
                        return;
                    }
                    const progress = Math.round((e.loaded / e.total) * 100);
                    setUploadProgress((prevState: any) => ({
                        ...prevState,
                        [file.name]: progress,
                    }));
                    setFiles((state) => ([...state, file]));
                },
            });
        }
    }, []);

    const onDeleteProp = (fileName: string) => () => {
        setFiles((state) => state.filter((file) => file.name !== fileName));
    };

    const renderOptions = useCallback((fileName: string) => () => (
        <FilePreviewDelete onClick={onDeleteProp(fileName)} />
    ), []);

    return (
        <Row align='stretch' gap='8' className={classNames(cls.FileUploader, {}, [className])}>
            <CreateFile className={cls.creator} onUpload={onUpload} />
            <Card className={cls.preview}>
                <Typography
                    variant='h5'
                    component='h4'
                    align='center'
                    className={cls.title}
                >
                    Выбранные файлы
                </Typography>
                <FilePreviewList
                    filePreviews={uploadProgress}
                    renderOptions={renderOptions}
                />
            </Card>
        </Row>
    );
});

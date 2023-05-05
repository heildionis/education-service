import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import cls from './CreateFile.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';
import { Card } from '@/shared/ui/Card';
import { Dropzone } from '@/shared/ui/Dropzone/Dropzone';
import { Typography } from '@/shared/ui/Typography/Typography';

interface CreateFileProps {
    className?: string;
    onUpload?: (files: File[]) => void;
    onDrop?: () => void;
}

export const CreateFile = memo((props: CreateFileProps) => {
    const {
        className,
        onDrop,
        onUpload,
    } = props;
    const { t } = useTranslation();

    return (
        <Card className={classNames(cls.CreateFile, {}, [className])}>
            <Typography
                variant='h5'
                component='h3'
                align='center'
            >
                Application
            </Typography>
            <Dropzone
                title={t<string>('Drag files to zone')}
                label={t<string>('Upload files')}
                onDrop={onDrop}
                onUpload={onUpload}
                multiple
            />
            <Button className={cls.btn} fullWidth>
                Send form
            </Button>
        </Card>
    );
});

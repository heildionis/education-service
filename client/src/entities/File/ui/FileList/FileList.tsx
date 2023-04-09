import { FC, ReactNode, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Typography } from 'shared/ui/Typography/Typography';
import { useTranslation } from 'react-i18next';
import { FileEntity, FileView } from '../../model/types/file';
import cls from './FileList.module.scss';
import { FileCard } from '../FileCard/FileCard';
import { FileCardSkeleton } from '../FileCard/FileCardSkeleton';

interface FileListProps {
    className?: string;
    files: FileEntity[];
    isLoading?: boolean;
    view?: FileView;
    onOpenDir?: (file: FileEntity) => () => void;
    renderOptions?: (file: FileEntity) => () => ReactNode;
}

const generateSkeleton = (view: FileView) => (
    new Array(view === 'tile' ? 40 : 10).fill(0).map((_, index) => (
        <FileCardSkeleton
            key={index}
            view={view}
        />
    ))
);

export const FileList: FC<FileListProps> = memo((props: FileListProps) => {
    const {
        className,
        files,
        isLoading,
        view = 'tile',
        onOpenDir,
        renderOptions,
    } = props;
    const { t } = useTranslation();

    const renderFile = (file: FileEntity) => (
        <FileCard
            onOpenDir={onOpenDir}
            key={file.id}
            file={file}
            view={view}
            renderOptions={renderOptions?.(file)}
        />
    );

    return (
        <div className={classNames(cls.FileList, {}, [className, cls[view]])}>
            {files.length > 0 ? files.map(renderFile) : (
                <Typography
                    align='center'
                    variant='h3'
                >
                    {t('Файлы не найдены')}
                </Typography>
            )}
            {isLoading && generateSkeleton(view)}
        </div>
    );
});

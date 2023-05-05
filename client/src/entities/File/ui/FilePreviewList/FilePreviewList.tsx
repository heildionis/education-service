import { FC, ReactNode, memo } from 'react';

import { FilePreviews } from '../../model/types/file';
import { FilePreview } from '../FilePreview/FilePreview';

import cls from './FilePreviewList.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Column } from '@/shared/ui/Stack';

interface FilePreviewListProps {
    className?: string;
    filePreviews: FilePreviews;
    renderOptions?: (fileName: string) => () => ReactNode;
}

export const FilePreviewList: FC<FilePreviewListProps> = memo((props: FilePreviewListProps) => {
    const {
        className,
        filePreviews,
        renderOptions,
    } = props;

    return (
        <Column gap='8' fullWidth className={classNames(cls.FilePreviewList, {}, [className])}>
            {Object.keys(filePreviews).map((fileName) => (
                <FilePreview
                    key={fileName}
                    progress={filePreviews[fileName]}
                    renderOptions={renderOptions?.(fileName)}
                >
                    {fileName}
                </FilePreview>
            ))}
        </Column>
    );
});

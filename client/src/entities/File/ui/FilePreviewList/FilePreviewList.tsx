import { FC, ReactNode, memo } from 'react';

import { FilePreviewType } from '../../model/types/file';
import { FilePreview } from '../FilePreview/FilePreview';

import cls from './FilePreviewList.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Column } from '@/shared/ui/Stack';

interface FilePreviewListProps {
    className?: string;
    filePreviews: FilePreviewType;
    renderOptions?: (fileName: string) => () => ReactNode;
}

export const FilePreviewList: FC<FilePreviewListProps> = memo(
    (props: FilePreviewListProps) => {
        const { className, filePreviews, renderOptions } = props;

        return (
            <Column
                gap='8'
                fullWidth
                className={classNames(cls.FilePreviewList, {}, [className])}
            >
                {Object.keys(filePreviews).map((fileName) => {
                    const progress = filePreviews[fileName];

                    if (progress === null) {
                        return null;
                    }

                    return (
                        <FilePreview
                            key={fileName}
                            progress={progress}
                            renderOptions={renderOptions?.(fileName)}
                        >
                            {fileName}
                        </FilePreview>
                    );
                })}
            </Column>
        );
    }
);

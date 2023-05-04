import {
    FC,
    memo,
    useCallback,
} from 'react';
import { useSelector } from 'react-redux';

import { useDeleteFile, useFilesTable } from '../../api/filesTableApi';
import { downloadFile } from '../../model/services/downloadFile';
import { FilesTableHeader } from '../FilesTableHeader/FilesTableHeader';

import { FileEntity, FileList } from '@/entities/File';
import { FileOptions } from '@/features/FileOptions';
import { getFileView } from '@/features/FileViewSelector';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Divider } from '@/shared/ui/Divider/Divider';
import { Column } from '@/shared/ui/Stack';

interface FilesTableProps {
    className?: string;
    parentId?: number | null;
    onFileClick?: (file: FileEntity) => () => void;
    onBackClick?: (parentId?: number | null) => () => void;
}

export const FilesTable: FC<FilesTableProps> = memo((props: FilesTableProps) => {
    const {
        className,
        parentId,
        onFileClick,
        onBackClick,
    } = props;
    const dispatch = useAppDispatch();
    const { data, isLoading } = useFilesTable({ parentId }, { refetchOnMountOrArgChange: true });
    const [deleteFile] = useDeleteFile();
    const view = useSelector(getFileView);

    const onDeleteClick = useCallback((file: FileEntity) => () => {
        deleteFile({ id: file.id });
    }, [deleteFile]);

    const onDownloadClick = useCallback((file: FileEntity) => () => {
        dispatch(downloadFile({ file }));
    }, [dispatch]);

    const renderOptions = useCallback((file: FileEntity) => () => (
        <FileOptions
            isDir={file.type === 'dir'}
            onDeleteClick={onDeleteClick?.(file)}
            onDownloadClick={onDownloadClick?.(file)}
        />
    ), [onDeleteClick, onDownloadClick]);

    return (
        <Column fullWidth gap='16'>
            <FilesTableHeader
                parentId={data?.folder.parentId}
                currentDir={parentId}
                onBackClick={onBackClick}
            />
            <Divider variant='small' color='secondary' />
            <FileList
                files={data?.files}
                view={view}
                isLoading={isLoading}
                onOpenDir={onFileClick}
                renderOptions={renderOptions}
                className={classNames('', {}, [className])}
            />
        </Column>
    );
});

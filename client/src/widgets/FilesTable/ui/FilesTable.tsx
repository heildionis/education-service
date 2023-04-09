import {
    FC,
    memo,
    useCallback,
    useEffect,
} from 'react';
import { useSelector } from 'react-redux';
import { FileEntity, FileList } from 'entities/File';
import { getFileView } from 'features/FileViewSelector';
import { FileOptions } from 'features/FileOptions';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { classNames } from 'shared/lib/classNames/classNames';
import { fetchFileList } from '../model/services/fetchFileList';
import { getFilesTableData, getFilesTableIsLoading } from '../model/selectors/filesTableSelectors';
import { deleteFile } from '../model/services/deleteFile';
import { downloadFile } from '../model/services/downloadFile';
import { filesTableReducer } from '../model/slice/filesTableSlice';

interface FilesTableProps {
    className?: string;
    parentId?: number | null;
    onFileClick?: (file: FileEntity) => () => void;
}

const reducers: ReducerList = {
    filesTable: filesTableReducer,
};

export const FilesTable: FC<FilesTableProps> = memo((props: FilesTableProps) => {
    const { className, parentId, onFileClick } = props;
    const dispatch = useAppDispatch();
    const files = useSelector(getFilesTableData);
    const isLoading = useSelector(getFilesTableIsLoading);
    const view = useSelector(getFileView);

    useEffect(() => {
        dispatch(fetchFileList({ parentId }));
    }, [dispatch, parentId]);

    const onDeleteClick = useCallback((file: FileEntity) => async () => {
        await dispatch(deleteFile({ id: file.id }));
        dispatch(fetchFileList({ parentId }));
    }, [dispatch, parentId]);

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
        <DynamicModuleLoader reducers={reducers}>
            <FileList
                files={files}
                view={view}
                isLoading={isLoading}
                onOpenDir={onFileClick}
                renderOptions={renderOptions}
                onDeleteFile={onDeleteClick}
                onDownloadFile={onDownloadClick}
                className={classNames('', {}, [className])}
            />
        </DynamicModuleLoader>
    );
});

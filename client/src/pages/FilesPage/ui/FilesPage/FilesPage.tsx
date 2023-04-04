import {
    FC, memo, useCallback, useEffect,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { FileEntity, FileList } from 'entities/File';
import { useSelector } from 'react-redux';
import { getFileView } from 'features/FileViewSelector';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { deleteFile } from 'pages/FilesPage/model/services/deleteFile';
import { Divider } from 'shared/ui/Divider/Divider';
import { FileUpload } from 'features/FileUpload';
import { downloadFile } from 'pages/FilesPage/model/services/downloadFile';
import { fetchFileList } from '../../model/services/fetchFileList';
import { filesPageActions, filesPageReducer } from '../../model/slice/filesPageSlice';
import {
    getFilesPageCurrentDir,
    getFilesPageData,
    getFilesPageIsLoading,
} from '../../model/selectors/filesPageSelectors';
import cls from './FilesPage.module.scss';
import { FilesPageHeader } from '../FilesPageHeader/FilesPageHeader';

interface FilesPageProps {
    className?: string;
}

const reducers: ReducerList = {
    filesPage: filesPageReducer,
};

const FilesPage: FC<FilesPageProps> = memo((props: FilesPageProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const view = useSelector(getFileView);
    const files = useSelector(getFilesPageData);
    const currentDir = useSelector(getFilesPageCurrentDir);
    const isLoading = useSelector(getFilesPageIsLoading);

    useInitialEffect(() => {
        dispatch(fetchFileList({}));
    });

    useEffect(() => {
        dispatch(fetchFileList({ parentId: currentDir }));
    }, [dispatch, currentDir]);

    const onOpenDir = useCallback((file: FileEntity) => () => {
        const isFolderAndCurrent = file.type === 'dir' && (currentDir !== undefined);
        if (isFolderAndCurrent) {
            dispatch(filesPageActions.pushToStack(currentDir));
            dispatch(filesPageActions.setCurrentDir(file.id));
        }
    }, [dispatch, currentDir]);

    const onDeleteClick = useCallback((file: FileEntity) => () => {
        dispatch(deleteFile({ id: file.id }));
        setTimeout(() => {
            dispatch(fetchFileList({ parentId: currentDir }));
        }, 300);
    }, [dispatch, currentDir]);

    const onDownloadClick = useCallback((file: FileEntity) => () => {
        dispatch(downloadFile({ file }));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page className={classNames(cls.FilesPage, {}, [className])}>
                <FilesPageHeader />
                <Divider />
                <FileList
                    onOpenDir={onOpenDir}
                    onDeleteFile={onDeleteClick}
                    onDownloadFile={onDownloadClick}
                    files={files}
                    view={view}
                    // isLoading={isLoading}
                />
            </Page>
        </DynamicModuleLoader>
    );
});

export default FilesPage;

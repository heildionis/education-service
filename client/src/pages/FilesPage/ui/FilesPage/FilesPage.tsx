import {
    memo,
    useCallback,
} from 'react';
import { useSelector } from 'react-redux';
import { Page } from 'widgets/Page';
import { FilesTable } from 'widgets/FilesTable';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Divider } from 'shared/ui/Divider/Divider';
import { FileEntity } from 'entities/File';
import { FilesController } from 'widgets/FilesContoller';
import { filesPageActions, filesPageReducer } from '../../model/slice/filesPageSlice';
import { getFilesPageCurrentDir } from '../../model/selectors/filesPageSelectors';
import { FilesPageHeader } from '../FilesPageHeader/FilesPageHeader';

const reducers: ReducerList = {
    filesPage: filesPageReducer,
};

const FilesPage = memo(() => {
    const dispatch = useAppDispatch();
    const currentDir = useSelector(getFilesPageCurrentDir);

    const onOpenDir = useCallback((file: FileEntity) => () => {
        const isFolderAndCurrent = file.type === 'dir' && (currentDir !== undefined);
        if (isFolderAndCurrent) {
            dispatch(filesPageActions.pushToStack(currentDir));
            dispatch(filesPageActions.setCurrentDir(file.id));
        }
    }, [dispatch, currentDir]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page>
                <FilesController parentId={currentDir} />
                <FilesPageHeader />
                <Divider />
                <FilesTable
                    parentId={currentDir}
                    onFileClick={onOpenDir}
                />
            </Page>
        </DynamicModuleLoader>
    );
});

export default FilesPage;

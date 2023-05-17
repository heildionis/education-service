import { memo } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { useFileNavigator } from '../../lib/hooks/useFileNavigator/useFileNavigator';
import { getFilesPageCurrentDir } from '../../model/selectors/filesPageSelectors';
import { filesPageReducer } from '../../model/slice/filesPageSlice';

import cls from './FilesPage.module.scss';

import {
    DynamicModuleLoader,
    ReducerList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Row } from '@/shared/ui/Stack';
import { FilesController } from '@/widgets/FilesContoller';
import { FilesTable } from '@/widgets/FilesTable';
import { Page } from '@/widgets/Page';

const reducers: ReducerList = {
    filesPage: filesPageReducer,
};

const FilesPage = memo(() => {
    const { id } = useParams<{ id: string }>();
    const currentDir = useSelector(getFilesPageCurrentDir);
    const { onOpen, onBack } = useFileNavigator(id);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page>
                <Row gap='32' fullWidth align='start'>
                    <FilesController
                        className={cls.sticky}
                        parentId={currentDir}
                    />
                    <FilesTable
                        parentId={currentDir}
                        onFileClick={onOpen}
                        onBackClick={onBack}
                    />
                </Row>
            </Page>
        </DynamicModuleLoader>
    );
});

export default FilesPage;

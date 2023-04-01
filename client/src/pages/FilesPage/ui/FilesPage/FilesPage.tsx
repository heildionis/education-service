import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Container } from 'shared/lib/components/Container/Container';
import { Page } from 'widgets/Page';
import { FilesTable, filesTableReducer } from 'widgets/FilesTable';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import cls from './FilesPage.module.scss';

interface FilesPageProps {
    className?: string;
}

const reducers: ReducerList = {
    filesTable: filesTableReducer,
};

const FilesPage: FC<FilesPageProps> = memo((props: FilesPageProps) => {
    const { className } = props;

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames(cls.FilesPage, {}, [className])}>
                <Container>
                    <FilesTable />
                </Container>
            </Page>
        </DynamicModuleLoader>
    );
});

export default FilesPage;

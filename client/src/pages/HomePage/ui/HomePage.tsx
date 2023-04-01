import {
    FC,
    memo,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Container } from 'shared/lib/components/Container/Container';
import { FileViewSelector, getFileView } from 'features/FileViewSelector';
import { FileEntity } from 'entities/File/model/types/file';
import { useSelector } from 'react-redux';
import { Page } from 'widgets/Page';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routes/routes';
import cls from './HomePage.module.scss';

interface HomePageProps {
    className?: string;
}

const HomePage: FC<HomePageProps> = memo((props) => {
    const { className } = props;
    const view = useSelector(getFileView);

    return (
        <Page className={classNames(cls.HomePage, {}, [className])}>
            <Container>
                <FileViewSelector />
                <div className={cls.list} />
                <AppLink to={RoutePath.file} variant='primary'>File</AppLink>
            </Container>
        </Page>
    );
});

export default HomePage;

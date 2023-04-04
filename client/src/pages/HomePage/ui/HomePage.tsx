import {
    FC,
    memo,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Container } from 'shared/lib/components/Container/Container';
import { Page } from 'widgets/Page';
import { Typography } from 'shared/ui/Typography/Typography';
import cls from './HomePage.module.scss';

interface HomePageProps {
    className?: string;
}

const HomePage: FC<HomePageProps> = memo((props) => {
    const { className } = props;

    return (
        <Page className={classNames(cls.HomePage, {}, [className])}>
            <Container>
                <Typography>Главная страница</Typography>
            </Container>
        </Page>
    );
});

export default HomePage;

import {
    FC,
    memo,
} from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Container } from '@/shared/lib/components/Container/Container';
import { Typography } from '@/shared/ui/Typography/Typography';
import { Page } from '@/widgets/Page';

interface HomePageProps {
    className?: string;
}

const HomePage: FC<HomePageProps> = memo((props) => {
    const { className } = props;

    return (
        <Page className={classNames('', {}, [className])}>
            <Container>
                <Typography>Главная страница</Typography>
            </Container>
        </Page>
    );
});

export default HomePage;

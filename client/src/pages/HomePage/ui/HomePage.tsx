import {
    FC,
    memo,
} from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Container } from '@/shared/lib/components/Container/Container';
import { FileUploader } from '@/widgets/FileUploader';
import { Page } from '@/widgets/Page';

interface HomePageProps {
    className?: string;
}

const HomePage: FC<HomePageProps> = memo((props) => {
    const { className } = props;

    return (
        <Page className={classNames('', {}, [className])}>
            <Container>
                <FileUploader />
            </Container>
        </Page>
    );
});

export default HomePage;

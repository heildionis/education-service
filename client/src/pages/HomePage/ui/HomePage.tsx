import { FC, memo } from 'react';
import { BMSTUIcon } from 'shared/assets/icons';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card, CardAction } from 'shared/ui/Card';
import { Typography } from 'shared/ui/Typography/Typography';
import cls from './HomePage.module.scss';

interface HomePageProps {
    className?: string;
}

const HomePage: FC<HomePageProps> = memo((props) => {
    const { className } = props;

    return (
        <div className={classNames(cls.HomePage, {}, [className])}>
            <Card className={cls.cardWrapper}>
                <CardAction className={cls.card}>
                    <BMSTUIcon style={{ fill: 'white' }} height={250} width={250} />
                    <div>
                        <Typography
                            variant='h2'
                            color='secondary'
                            align='center'
                        >
                            КФ МГТУ
                        </Typography>
                        <Typography
                            variant='h5'
                            color='secondary'
                            align='center'
                        >
                            им. Н. Э. Баумана
                        </Typography>
                    </div>
                </CardAction>
            </Card>
        </div>
    );
});

export default HomePage;

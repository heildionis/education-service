import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './HomePage.module.scss';

interface HomePageProps {
    className?: string;
}

const HomePage: FC<HomePageProps> = memo((props) => {
    const { className } = props;

    return (
        <div className={classNames(cls.HomePage, {}, [className])}>
            Homepage
        </div>
    );
});

export default HomePage;

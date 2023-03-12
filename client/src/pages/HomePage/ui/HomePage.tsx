import {
    FC,
    memo,
    useCallback,
    useState,
} from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    getUserAuthData,
    getUserIsLoading,
    logout,
} from 'entities/User';
import { RegistrationModal } from 'features/Registration';
import RegistrationForm from 'features/Registration/ui/RegistrationForm/RegistrationForm';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './HomePage.module.scss';

interface HomePageProps {
    className?: string;
}

const HomePage: FC<HomePageProps> = memo((props) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const isAuth = useSelector(getUserAuthData);
    const isLoading = useSelector(getUserIsLoading);

    const onCloseModal = useCallback(() => {
        setIsOpen(false);
    }, []);

    const onOpenModal = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onClickLogout = useCallback(() => {
        dispatch(logout());
    }, [dispatch]);

    if (isLoading) {
        return <>Loading....</>;
    }

    if (isAuth) {
        return (
            <div className={classNames(cls.HomePage, {}, [className])}>
                <Button onClick={onClickLogout}>Выйти</Button>
                <Loader />
            </div>
        );
    }

    return (
        <div className={classNames(cls.HomePage, {}, [className])}>
            <RegistrationModal
                isOpen={isOpen}
                onClose={onCloseModal}
            />
            <Button onClick={onOpenModal}>Войти</Button>
        </div>
    );
});

export default HomePage;

import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RegistrationModal } from 'features/Registration';
import { getUserAuthData, getUserIsLoading, logout } from 'entities/User';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';
import { Container } from 'shared/lib/components/Container/Container';
import { LoginModal } from 'features/AuthBy';
import cls from './Navbar.module.scss';

interface NavbarProps {
   className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('auth');
    const dispatch = useAppDispatch();
    const [isRegistrationModal, setIsRegistrationModal] = useState(false);
    const [isLoginModal, setIsLoginModal] = useState(false);
    const isAuth = useSelector(getUserAuthData);
    const isLoading = useSelector(getUserIsLoading);

    const onCloseRegistrationModal = useCallback(() => {
        setIsRegistrationModal(false);
    }, []);

    const onOpenRegistrationModal = useCallback(() => {
        setIsRegistrationModal(true);
    }, []);

    const onCloseLoginModal = useCallback(() => {
        setIsLoginModal(false);
    }, []);

    const onOpenLoginModal = useCallback(() => {
        setIsLoginModal(true);
    }, []);

    const onClickLogout = useCallback(() => {
        dispatch(logout());
    }, [dispatch]);

    if (isLoading) {
        return <>Loading....</>;
    }

    if (isAuth) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <Container className={cls.container}>
                    <Button className={cls.authBtn} onClick={onClickLogout}>Выйти</Button>
                </Container>
            </div>
        );
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Container className={cls.container}>
                <RegistrationModal
                    isOpen={isRegistrationModal}
                    onClose={onCloseRegistrationModal}
                />
                <LoginModal
                    isOpen={isLoginModal}
                    onClose={onCloseLoginModal}
                />
                <Button
                    isAnimated={false}
                    className={cls.authBtn}
                    onClick={onOpenRegistrationModal}
                >
                    {t('Зарегистрироваться')}
                </Button>
                <Button
                    isAnimated={false}
                    className={cls.authBtn}
                    onClick={onOpenLoginModal}
                >
                    {t('Войти')}
                </Button>
            </Container>
        </div>
    );
};

import {
    FC,
    memo,
    useCallback,
    useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RegistrationModal } from 'features/Registration';
import { getUserAuthData, getUserIsLoading, logout } from 'entities/User';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';
import { Container } from 'shared/lib/components/Container/Container';
import { LoginModal } from 'features/AuthBy';
import { TelegramIcon } from 'shared/assets/icons';
import { Link } from 'react-router-dom';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routes/routes';
import { Row } from 'shared/ui/Stack';
import cls from './Navbar.module.scss';

interface NavbarProps {
   className?: string;
}

export const Navbar: FC<NavbarProps> = memo((props) => {
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

    if (isAuth) {
        return (
            <Row className={classNames(cls.Navbar, {}, [className])}>
                <Container className={cls.container}>
                    <div className={cls.logo} />
                    <Row justify='between'>
                        <AppLink to={RoutePath.files}>{t('Файлы')}</AppLink>
                        <Button className={cls.authBtn} onClick={onClickLogout}>{t('Выйти')}</Button>
                    </Row>
                </Container>
            </Row>
        );
    }

    return (
        <Row className={classNames(cls.Navbar, {}, [className])}>
            <Container>
                <Row justify='between'>
                    <Link to='https://t.me/heildionis' target='_blank'>
                        <TelegramIcon fill='white' />
                    </Link>
                    <Row gap='16' className={cls.rightSide}>
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
                        <RegistrationModal
                            isOpen={isRegistrationModal}
                            onClose={onCloseRegistrationModal}
                        />
                        <LoginModal
                            isOpen={isLoginModal}
                            onClose={onCloseLoginModal}
                        />
                    </Row>
                </Row>
            </Container>
        </Row>
    );
});

import {
    FC,
    memo,
    useCallback,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getRegistrationEmail } from '../../model/selectors/getRegistrationEmail/getRegistrationEmail';
import { getRegistrationPassword } from '../../model/selectors/getRegistrationPassword/getRegistrationPassword';
import { getRegistrationUsername } from '../../model/selectors/getRegistrationUsername/getRegistrationUsername';
import { register } from '../../model/services/register';
import { registrationActions, registrationReducer } from '../../model/slice/registrationSlice';

import cls from './RegistrationForm.module.scss';

import { AuhtPersonIcon } from '@/shared/assets/icons';
import { RoutePath } from '@/shared/config/routes/routes';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { Button } from '@/shared/ui/Button/Button';
import { Card } from '@/shared/ui/Card';
import { Icon } from '@/shared/ui/Icon/Icon';
import { Input } from '@/shared/ui/Input/Input';
import { Column } from '@/shared/ui/Stack';
import { Typography } from '@/shared/ui/Typography/Typography';

interface RegistrationFormProps {
    className?: string;
    onSuccess: () => void;
}

const reducers: ReducerList = {
    registration: registrationReducer,
};

const RegistrationForm: FC<RegistrationFormProps> = memo((props) => {
    const { className, onSuccess } = props;
    const { t } = useTranslation('auth');
    const dispatch = useAppDispatch();
    const email = useSelector(getRegistrationEmail);
    const username = useSelector(getRegistrationUsername);
    const password = useSelector(getRegistrationPassword);
    const navigate = useNavigate();

    const onChangeUsername = useCallback((value: string) => {
        dispatch(registrationActions.setUsername(value));
    }, [dispatch]);

    const onChangeEmail = useCallback((value: string) => {
        dispatch(registrationActions.setEmail(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(registrationActions.setPassword(value));
    }, [dispatch]);

    const onRegistrationClick = async () => {
        const result = await dispatch(register({ username, email, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
            navigate(RoutePath.files, { replace: true });
        }
    };

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Card variant='secondary' className={cls.card}>
                <Column gap='16'>
                    <Icon Svg={AuhtPersonIcon} variant='secondary' />
                    <Typography
                        size='large'
                        className={cls.title}
                        color='inverted'
                        align='center'
                    >
                        {t('Зарегистрируйтесь и получите доступ к файлам')}
                    </Typography>
                </Column>
            </Card>
            <Column gap='16' fullWidth className={classNames(cls.form, {}, [className])}>
                <Column fullWidth align='start' gap='2'>
                    <Typography
                        color='gray'
                    >
                        {t('Имя пользователя')}
                    </Typography>
                    <Input
                        placeholder={t<string>('Введите имя пользователя')}
                        type='text'
                        value={username}
                        onChange={onChangeUsername}
                        fullWidth
                    />
                </Column>
                <Column fullWidth align='start' gap='2'>
                    <Typography
                        color='gray'
                    >
                        {t('Почта')}
                    </Typography>
                    <Input
                        placeholder={t<string>('Введите почту')}
                        type='text'
                        value={email}
                        onChange={onChangeEmail}
                        fullWidth
                    />
                </Column>
                <Column fullWidth align='start' gap='2'>
                    <Typography
                        color='gray'
                    >
                        {t('Пароль')}
                    </Typography>
                    <Input
                        placeholder={t<string>('Введите пароль')}
                        type='password'
                        value={password}
                        onChange={onChangePassword}
                        fullWidth
                    />
                </Column>
                <Column fullWidth align='start' gap='2'>
                    <Typography
                        color='gray'
                    >
                        {t('Повторите пароль')}
                    </Typography>
                    <Input
                        placeholder={t<string>('Введите пароль')}
                        type='password'
                        value={password}
                        onChange={onChangePassword}
                        fullWidth
                    />
                </Column>
                <Button
                    className={cls.btn}
                    type='button'
                    onClick={onRegistrationClick}
                    fullWidth
                >
                    {t('Зарегистрироваться')}
                </Button>
                <Typography
                    align='center'
                    className={cls.privacy}
                    color='gray'
                    size='small'
                >
                    {t('Нажимая кнопку "Зарегистрироваться" вы принимаете')}
                    <AppLink to='/'>
                        {' '}
                        {t('пользовательское соглашение')}
                    </AppLink>
                </Typography>
            </Column>
        </DynamicModuleLoader>
    );
});

export default RegistrationForm;

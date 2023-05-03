import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { loginByUsername } from '../../model/services/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';

import cls from './LoginForm.module.scss';

import { AuhtPersonIcon } from '@/shared/assets/icons';
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

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const reducers: ReducerList = {
    login: loginReducer,
};

const LoginForm: FC<LoginFormProps> = memo((props) => {
    const { className, onSuccess } = props;
    const { t } = useTranslation('auth');
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    };

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Card variant='secondary' className={cls.card}>
                <Column gap='16'>
                    <Icon Svg={AuhtPersonIcon} variant='soft' />
                    <Typography
                        className={cls.title}
                        color='soft'
                        align='center'
                        variant='h5'
                    >
                        {t('Войдите и получите доступ к файлам')}
                    </Typography>
                </Column>
            </Card>
            <Column gap='16' className={classNames(cls.form, {}, [className])} fullWidth>
                <Column fullWidth align='start' gap='2'>
                    <Typography
                        color='disabled'
                        variant='h5'
                    >
                        {t('Почта')}
                    </Typography>
                    <Input
                        fullWidth
                        placeholder={t<string>('Введите имя пользователя')}
                        value={username}
                        onChange={onChangeUsername}
                    />
                </Column>
                <Column fullWidth align='start' gap='2'>
                    <Typography
                        color='disabled'
                        variant='h5'
                    >
                        {t('Пароль')}
                    </Typography>
                    <Input
                        fullWidth
                        type='password'
                        placeholder={t<string>('Введите пароль')}
                        value={password}
                        onChange={onChangePassword}
                    />
                </Column>
                <Button
                    fullWidth
                    type='button'
                    onClick={onLoginClick}
                    className={cls.btn}
                >
                    {t('Войти')}
                </Button>
                <Typography
                    align='center'
                    className={cls.privacy}
                    color='disabled'
                    variant='h6'
                >
                    {t('Нажимая кнопку "Войти" вы принимаете')}
                    <AppLink to='/'>
                        {' '}
                        {t('пользовательское соглашение')}
                    </AppLink>
                </Typography>
            </Column>
        </DynamicModuleLoader>
    );
});

export default LoginForm;

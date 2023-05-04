import {
    FC, memo, useCallback, useMemo,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { loginByUsername } from '../../model/services/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';

import { AuthCard, AuthInputType } from '@/entities/Auth';
import { AuhtPersonIcon } from '@/shared/assets/icons';
import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

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

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [dispatch, onSuccess, username, password]);

    const inputs = useMemo((): AuthInputType<string>[] => [
        {
            label: t('Почта'),
            value: username,
            onChange: onChangeUsername,
            type: 'text',
            placeholder: t('Введите имя пользователя'),
        },
        {
            label: t('Пароль'),
            value: password,
            onChange: onChangePassword,
            type: 'password',
            placeholder: t('Введите пароль'),
        },
    ], [
        onChangeUsername,
        onChangePassword,
        username,
        password,
        t,
    ]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <AuthCard
                className={className}
                AuthIcon={AuhtPersonIcon}
                title={t('Войдите и получите доступ к файлам')}
                authButtonTitle={t('Войти')}
                onAuthClick={onLoginClick}
                inputs={inputs}
            />
        </DynamicModuleLoader>
    );
});

export default LoginForm;

import {
    FC,
    memo,
    useCallback,
    useMemo,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getRegistrationEmail } from '../../model/selectors/getRegistrationEmail/getRegistrationEmail';
import { getRegistrationPassword } from '../../model/selectors/getRegistrationPassword/getRegistrationPassword';
import { getRegistrationUsername } from '../../model/selectors/getRegistrationUsername/getRegistrationUsername';
import { register } from '../../model/services/register';
import { registrationActions, registrationReducer } from '../../model/slice/registrationSlice';

import { AuthCard, AuthInputType } from '@/entities/Auth';
import { AuhtPersonIcon } from '@/shared/assets/icons';
import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

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

    const onChangeUsername = useCallback((value: string) => {
        dispatch(registrationActions.setUsername(value));
    }, [dispatch]);

    const onChangeEmail = useCallback((value: string) => {
        dispatch(registrationActions.setEmail(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(registrationActions.setPassword(value));
    }, [dispatch]);

    const onRegistrationClick = useCallback(async () => {
        const result = await dispatch(register({ username, email, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [
        dispatch,
        onSuccess,
        email,
        password,
        username,
    ]);

    const inputs = useMemo((): AuthInputType<string>[] => [
        {
            label: t('Имя пользователя'),
            value: username,
            onChange: onChangeUsername,
            type: 'text',
            placeholder: t('Введите имя пользователя'),
        },
        {
            label: t('Почта'),
            value: email,
            onChange: onChangeEmail,
            type: 'email',
            placeholder: t('Введите почту'),
        },
        {
            label: t('Пароль'),
            value: password,
            onChange: onChangePassword,
            type: 'password',
            placeholder: t('Введите пароль'),
        },
        {
            label: t('Повторите пароль'),
            value: password,
            onChange: onChangePassword,
            type: 'password',
            placeholder: t('Введите повторно пароль'),
        },
    ], [
        onChangeEmail,
        onChangeUsername,
        onChangePassword,
        username,
        email,
        password,
        t,
    ]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <AuthCard
                className={className}
                AuthIcon={AuhtPersonIcon}
                title={t('Зарегистрируйтесь и получите доступ к файлам')}
                authButtonTitle={t('Зарегистрироваться')}
                onAuthClick={onRegistrationClick}
                inputs={inputs}
            />
        </DynamicModuleLoader>
    );
});

export default RegistrationForm;

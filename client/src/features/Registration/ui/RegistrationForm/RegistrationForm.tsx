import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { classNames } from 'shared/lib/classNames/classNames';
import { getRegistrationEmail } from '../../model/selectors/getRegistrationEmail/getRegistrationEmail';
import { getRegistrationPassword } from '../../model/selectors/getRegistrationPassword/getRegistrationPassword';
import { getRegistrationUsername } from '../../model/selectors/getRegistrationUsername/getRegistrationUsername';
import { register } from '../../model/services/register';
import { registrationActions } from '../../model/slice/registrationSlice';
import cls from './RegistrationForm.module.scss';

interface RegistrationFormProps {
    className?: string;
    onSuccess: () => void;
}

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

    const onRegistrationClick = async () => {
        const result = await dispatch(register({ username, email, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    };

    return (
        <div className={classNames(cls.RegistrationForm, {}, [className])}>
            <div className={cls.wrapper}>
                <Input
                    placeholder={t<string>('Введите имя пользователя')}
                    type='text'
                    value={username}
                    onChange={onChangeUsername}
                />
                <Input
                    placeholder={t<string>('Введите почту')}
                    type='text'
                    value={email}
                    onChange={onChangeEmail}
                />
                <Input
                    placeholder={t<string>('Введите пароль')}
                    type='password'
                    value={password}
                    onChange={onChangePassword}
                />
            </div>
            <Button
                className={cls.btn}
                type='button'
                onClick={onRegistrationClick}
            >
                {t('Зарегистрироваться')}
            </Button>
        </div>
    );
});

export default RegistrationForm;

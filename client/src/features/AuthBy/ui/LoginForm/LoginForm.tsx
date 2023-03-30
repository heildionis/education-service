import { FC, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { loginByUsername } from '../../model/services/loginByUsername';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

const reducers: ReducerList = {
    login: loginReducer,
};

const LoginForm: FC<LoginFormProps> = memo((props) => {
    const { className } = props;
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
        await dispatch(loginByUsername({ username, password }));
    };

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <div className={cls.wrapper}>
                    <Input
                        placeholder={t<string>('Введите имя пользователя')}
                        value={username}
                        onChange={onChangeUsername}
                    />
                    <Input
                        type='password'
                        placeholder={t<string>('Введите имя пользователя')}
                        value={password}
                        onChange={onChangePassword}
                    />
                    <Button
                        className={cls.btn}
                        type='button'
                        onClick={onLoginClick}
                    >
                        Войти
                    </Button>
                </div>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;

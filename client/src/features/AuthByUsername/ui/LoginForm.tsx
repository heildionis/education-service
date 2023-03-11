import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ChangeEvent, FC, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { getRegistrationEmail } from '../model/selectors/getRegistrationEmail/getRegistrationEmail';
import { getRegistrationPassword } from '../model/selectors/getRegistrationPassword/getRegistrationPassword';
import { getRegistrationUsername } from '../model/selectors/getRegistrationUsername/getRegistrationUsername';
import { registration } from '../model/services/registration';
import { registrationActions } from '../model/slice/registrationSlice';

interface LoginFormProps {
    className?: string;
}

export const LoginForm: FC<LoginFormProps> = (props) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const email = useSelector(getRegistrationEmail);
    const username = useSelector(getRegistrationUsername);
    const password = useSelector(getRegistrationPassword);

    const onChangeUsername = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        dispatch(registrationActions.setUsername(event.target.value));
    }, [dispatch]);

    const onChangeEmail = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        dispatch(registrationActions.setEmail(event.target.value));
    }, [dispatch]);

    const onChangePassword = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        dispatch(registrationActions.setPassword(event.target.value));
    }, [dispatch]);

    const onRegistrationClick = async () => {
        const result = await dispatch(registration({ username, email, password }));
    };

    return (
        <>
            <input type='text' value={username} onChange={onChangeUsername} />
            <input type='text' value={email} onChange={onChangeEmail} />
            <input type='text' value={password} onChange={onChangePassword} />
            <button type='button' onClick={onRegistrationClick}>Зарегистрироваться</button>
        </>
    );
};

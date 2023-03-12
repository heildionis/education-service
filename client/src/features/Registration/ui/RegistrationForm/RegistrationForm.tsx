import { FC, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Input } from 'shared/ui/Input/Input';
import { getRegistrationEmail } from '../../model/selectors/getRegistrationEmail/getRegistrationEmail';
import { getRegistrationPassword } from '../../model/selectors/getRegistrationPassword/getRegistrationPassword';
import { getRegistrationUsername } from '../../model/selectors/getRegistrationUsername/getRegistrationUsername';
import { register } from '../../model/services/register';
import { registrationActions } from '../../model/slice/registrationSlice';

interface RegistrationFormProps {
    className?: string;
}

export const RegistrationForm: FC<RegistrationFormProps> = (props) => {
    const { className } = props;
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
        await dispatch(register({ username, email, password }));
    };

    return (
        <>
            <Input type='text' value={username} onChange={onChangeUsername} />
            <Input type='text' value={email} onChange={onChangeEmail} />
            <Input type='text' value={password} onChange={onChangePassword} />
            <button type='button' onClick={onRegistrationClick}>Зарегистрироваться</button>
        </>
    );
};

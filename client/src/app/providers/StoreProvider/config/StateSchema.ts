import { AxiosInstance } from 'axios';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthBy';
import { RegistrationSchema } from 'features/Registration';

export interface StateSchema {
    user: UserSchema;
    registration: RegistrationSchema;
    login: LoginSchema;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    extra: ThunkExtraArg;
    rejectValue: T;
    state: StateSchema;
}

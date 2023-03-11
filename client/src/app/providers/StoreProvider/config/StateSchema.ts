import { AxiosInstance } from 'axios';
import { UserSchema } from 'entities/User';
import { RegistrationSchema } from 'features/AuthByUsername';

export interface StateSchema {
    user: UserSchema;
    registration: RegistrationSchema;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    extra: ThunkExtraArg;
    rejectValue: T;
    state: StateSchema;
}

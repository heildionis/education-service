import { ThunkConfig } from 'app/providers/StoreProvider';
import { userActions, UserResponse } from 'entities/User';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { isAxiosError } from 'axios';
import { LOCAL_STORAGE_ACCESS_TOKEN } from 'shared/constants/localStorage';

interface LoginProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<UserResponse, LoginProps, ThunkConfig<string>>(
    'login/loginByUsername',
    async (authData, thunkApi) => {
        const { extra, dispatch, rejectWithValue } = thunkApi;

        try {
            const response = await extra.api.post<UserResponse>('/user/login', authData);

            const { user, accessToken } = response.data;

            dispatch(userActions.setAuthData(user));
            dispatch(userActions.setInited(true));
            localStorage.setItem(LOCAL_STORAGE_ACCESS_TOKEN, accessToken);

            return response.data;
        } catch (error) {
            if (isAxiosError(error)) {
                return rejectWithValue(error.response?.data.message);
            }
            return rejectWithValue('Unknown error');
        }
    },
);

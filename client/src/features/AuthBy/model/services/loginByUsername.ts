import { ThunkConfig } from 'app/providers/StoreProvider';
import { userActions, UserResponse } from 'entities/User';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { isAxiosError } from 'axios';

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

            const { user } = response.data;

            dispatch(userActions.setAuthData(user));

            return response.data;
        } catch (error) {
            if (isAxiosError(error)) {
                return rejectWithValue(error.response?.data.message);
            }
            return rejectWithValue('Unknown error');
        }
    },
);

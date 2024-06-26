import { createAsyncThunk } from '@reduxjs/toolkit';
import { isAxiosError } from 'axios';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { userActions, UserResponse } from '@/entities/User';
import { LOCAL_STORAGE_ACCESS_TOKEN } from '@/shared/constants/localStorage';

interface RegistrationProps {
    username: string;
    email: string;
    password: string;
}

export const register = createAsyncThunk<UserResponse, RegistrationProps, ThunkConfig<string>>(
    'registration/register',
    async (authData, thunkAPI) => {
        const { dispatch, rejectWithValue, extra } = thunkAPI;
        try {
            const response = await extra.api.post<UserResponse>('/user/register', authData);

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

import { createAsyncThunk } from '@reduxjs/toolkit';

import { UserResponse } from '../types/user';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { LOCAL_STORAGE_ACCESS_TOKEN } from '@/shared/constants/localStorage';

export const checkAuth = createAsyncThunk<UserResponse, void, ThunkConfig<string>>(
    'user/checkAuth',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI;

        try {
            const response = await extra.api.get<UserResponse>('/user/refresh', { withCredentials: true });

            if (!response.data) {
                throw new Error();
            }

            const { accessToken } = response.data;

            localStorage.setItem(LOCAL_STORAGE_ACCESS_TOKEN, accessToken);

            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue('error');
        }
    },
);

import { createAsyncThunk } from '@reduxjs/toolkit';
import { userActions, UserResponse } from 'entities/User';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { LOCAL_STORAGE_ACCESS_TOKEN } from 'shared/constants/localStorage';

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

            if (!response.data) {
                throw new Error();
            }

            const { user, accessToken } = response.data;

            dispatch(userActions.setAuthData(user));
            localStorage.setItem(LOCAL_STORAGE_ACCESS_TOKEN, accessToken);

            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue('error');
        }
    },
);

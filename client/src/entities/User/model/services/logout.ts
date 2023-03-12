import { LOCAL_STORAGE_ACCESS_TOKEN } from 'shared/constants/localStorage';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const logout = createAsyncThunk<any, void, ThunkConfig<string>>(
    'user/logout',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI;

        try {
            const response = await extra.api.post('/user/logout', { withCredentials: true });

            if (!response.data) {
                throw new Error();
            }

            localStorage.removeItem(LOCAL_STORAGE_ACCESS_TOKEN);

            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue('error');
        }
    },
);

import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { FileEntity } from 'entities/File';

export const fetchFiles = createAsyncThunk<FileEntity, void, ThunkConfig<string>>(
    'filesPage',
    async (_, thunkApi) => {
        const {
            rejectWithValue, extra,
        } = thunkApi;
        try {
            const response = await extra.api.get('/file');

            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue('error');
        }
    },
);

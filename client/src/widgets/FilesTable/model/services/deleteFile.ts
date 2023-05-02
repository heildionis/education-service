import { createAsyncThunk } from '@reduxjs/toolkit';
import { isAxiosError } from 'axios';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { FileEntity } from '@/entities/File';

interface DeleteFileProps {
    id: number
}

export const deleteFile = createAsyncThunk<FileEntity, DeleteFileProps, ThunkConfig<string>>(
    'filesTable/deleteFile',
    async ({ id }, thunkApi) => {
        const { rejectWithValue, extra } = thunkApi;

        try {
            const response = await extra.api.delete(`/file?id=${id}`);

            return response.data;
        } catch (error) {
            if (isAxiosError(error)) {
                return rejectWithValue(error.response?.data.message);
            }
            return rejectWithValue('error');
        }
    },
);

import { createAsyncThunk } from '@reduxjs/toolkit';
import { isAxiosError } from 'axios';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { FileEntity } from '@/entities/File';

interface CreateDirProps {
    name: string;
    parentId?: number | null;
}

export const createDir = createAsyncThunk<FileEntity, CreateDirProps, ThunkConfig<string>>(
    'filesPage/createDir',
    async ({ name, parentId }, thunkApi) => {
        const { rejectWithValue, extra } = thunkApi;

        try {
            const response = await extra.api.post('/file', {
                name,
                type: 'dir',
                parentId,
            });

            return response.data;
        } catch (error) {
            if (isAxiosError(error)) {
                return rejectWithValue(error.response?.data.message);
            }
            return rejectWithValue('error');
        }
    },
);

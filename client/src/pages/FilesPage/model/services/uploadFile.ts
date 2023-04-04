import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { isAxiosError } from 'axios';
import { FileEntity } from 'entities/File';

interface CreateDirProps {
    file: File | Blob;
    parentId?: number | null;
}

export const uploadFile = createAsyncThunk<FileEntity, CreateDirProps, ThunkConfig<string>>(
    'filesPage/uploadFile',
    async ({ file, parentId }, thunkApi) => {
        const { rejectWithValue, extra } = thunkApi;

        try {
            const formData = new FormData();
            formData.append('file', file);
            if (parentId) {
                formData.append('parentId', String(parentId));
            }
            const response = await extra.api.post('/file/upload', formData);

            return response.data;
        } catch (error) {
            console.log(error);
            if (isAxiosError(error)) {
                return rejectWithValue(error.response?.data.message);
            }
            return rejectWithValue('error');
        }
    },
);

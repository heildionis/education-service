import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { isAxiosError } from 'axios';
import { FileEntity, FileType } from 'entities/File';

interface CreateDirProps {
    name: string;
    type: FileType;
    parentId?: number | null;
}

export const createDir = createAsyncThunk<FileEntity, CreateDirProps, ThunkConfig<string>>(
    'createDir/createDir',
    async (dirData, thunkApi) => {
        const { rejectWithValue, extra } = thunkApi;

        try {
            const response = await extra.api.post('/file', dirData);

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

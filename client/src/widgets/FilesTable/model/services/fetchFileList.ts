import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { isAxiosError } from 'axios';
import { FileEntity } from 'entities/File';

interface FetchFileProps {
    parentId?: number | null;
}

export const fetchFileList = createAsyncThunk<FileEntity[], FetchFileProps, ThunkConfig<string>>(
    'filesTable/fetchFileList',
    async ({ parentId }, thunkApi) => {
        const { rejectWithValue, extra } = thunkApi;
        try {
            const response = await extra.api.get(`/file${parentId ? `?parentId?=${parentId}` : ''}`);

            if (!response.data) {
                rejectWithValue('error');
            }

            return response.data;
        } catch (error) {
            if (isAxiosError(error)) {
                return rejectWithValue(error?.message);
            }
            return rejectWithValue('error');
        }
    },
);

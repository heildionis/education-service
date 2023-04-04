import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { FileEntity } from 'entities/File';

interface FetchFileListProps {
    parentId?: string | number | null;
}

export const fetchFileList = createAsyncThunk<FileEntity[], FetchFileListProps, ThunkConfig<string>>(
    'filesPage/fetchFileList',
    async ({ parentId }, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI;

        // TODO: write for service test
        try {
            const response = await extra.api.get<{ files: FileEntity[]}>(
                `/file${parentId
                    ? `?parentId=${parentId}`
                    : ''}`,
            );

            if (!response.data) {
                throw new Error();
            }

            return response.data.files;
        } catch (error) {
            return rejectWithValue('error');
        }
    },
);

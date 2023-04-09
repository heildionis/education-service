import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { isAxiosError } from 'axios';
import { FileEntity } from 'entities/File';

interface DownloadFileProps {
    file: FileEntity;
}

export const downloadFile = createAsyncThunk<void, DownloadFileProps, ThunkConfig<string>>(
    'filesTable/downloadFile',
    async ({ file }, thunkApi) => {
        const { rejectWithValue, extra } = thunkApi;

        try {
            const response = await fetch(`api/files/download?id=${file.id}`);
            if (response.status === 200) {
                const blob = await response.blob();
                const downloadUrl = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = downloadUrl;
                link.download = file.name;
                document.body.appendChild(link);
                link.click();
                link.remove();
            }

            return undefined;
        } catch (error) {
            console.log(error);
            if (isAxiosError(error)) {
                return rejectWithValue(error.response?.data.message);
            }
            return rejectWithValue('error');
        }
    },
);

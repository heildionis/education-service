import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FileUploadSchema } from '../types/FileUploadSchema';

const initialState: FileUploadSchema = {
};

export const fileUploadSlice = createSlice({
    name: 'fileUploadSlice',
    initialState,
    reducers: {
        setFiles: (state, action: PayloadAction<File | Blob>) => {
            state.file = action.payload;
        },
    },
});

export const { actions: fileUploadActions } = fileUploadSlice;
export const { reducer: fileUploadReducer } = fileUploadSlice;

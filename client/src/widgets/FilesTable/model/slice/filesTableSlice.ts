import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { FileEntity } from 'entities/File';
import { FilesTableSchema } from '../types/FilesTableSchema';
import { fetchFileList } from '../services/fetchFileList';

const initialState: FilesTableSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
};

export const filesTableSlice = createSlice({
    name: 'filesTableSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFileList.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchFileList.fulfilled, (state, action: PayloadAction<FileEntity[]>) => {
                state.data = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchFileList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: filesTableActions } = filesTableSlice;
export const { reducer: filesTableReducer } = filesTableSlice;

import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { FileEntity } from 'entities/File';
import { StateSchema } from 'app/providers/StoreProvider';
import { FilesPageSchema } from '../types/FilesPageSchema';
import { fetchFileList } from '../services/fetchFileList';

const initialState: FilesPageSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
    currentDir: null,
    dirStack: [],
};

export const filesPageSlice = createSlice({
    name: 'filesPageSlice',
    initialState,
    reducers: {
        pushToStack: (state, action: PayloadAction<number | null>) => {
            state.dirStack.push(action.payload);
        },
        setCurrentDir: (state, action: PayloadAction<number | null>) => {
            state.currentDir = action.payload;
        },
        popFromStack: (state) => {
            const backDirId = state.dirStack?.pop();
            if (backDirId) {
                state.currentDir = backDirId;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFileList.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchFileList.fulfilled, (
                state,
                action,
            ) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchFileList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: filesPageActions } = filesPageSlice;
export const { reducer: filesPageReducer } = filesPageSlice;

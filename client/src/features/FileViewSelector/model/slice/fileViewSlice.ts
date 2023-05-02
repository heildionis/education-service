import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { FileViewSchema } from '../types/FileViewSchema';

import { FileView } from '@/entities/File';
import { LOCAL_STORAGE_FILE_VIEW } from '@/shared/constants/localStorage';

const initialState: FileViewSchema = {
    view: 'tile',
};

export const fileViewSlice = createSlice({
    name: 'fileViewSlice',
    initialState,
    reducers: {
        setView: (state, action: PayloadAction<FileView>) => {
            state.view = action.payload;
            localStorage.setItem(LOCAL_STORAGE_FILE_VIEW, action.payload);
        },
        initView: (state) => {
            const view = localStorage.getItem(LOCAL_STORAGE_FILE_VIEW) as FileView;
            state.view = view;
        },
    },
});

export const { actions: fileViewActions } = fileViewSlice;
export const { reducer: fileViewReducer } = fileViewSlice;

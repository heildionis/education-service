import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CreateDirSchema } from '../types/CreateDirSchema';

import { FileType } from '@/entities/File';

const initialState: CreateDirSchema = {
    name: '',
    type: 'dir',
};

export const createDirSlice = createSlice({
    name: 'createDir',
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        setType: (state, action: PayloadAction<FileType>) => {
            state.type = action.payload;
        },
        setParentId: (state, action: PayloadAction<number>) => {
            state.parentId = action.payload;
        },
    },
});

export const { actions: createDirActions } = createDirSlice;
export const { reducer: createDirReducer } = createDirSlice;

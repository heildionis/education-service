import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FilesPageSchema } from '../types/FilesPageSchema';

const initialState: FilesPageSchema = {
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
});

export const { actions: filesPageActions } = filesPageSlice;
export const { reducer: filesPageReducer } = filesPageSlice;

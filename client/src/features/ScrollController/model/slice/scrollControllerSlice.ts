import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ScrollControllerSchema } from '../types/ScrollControllerSchema';

const initialState: ScrollControllerSchema = {
    scroll: {},
};

export const scrollControllerSlice = createSlice({
    name: 'scrollControllerSlice',
    initialState,
    reducers: {
        setScrollPosition: (state, { payload }: PayloadAction<{ path: string; position: number }>) => {
            state.scroll[payload.path] = payload.position;
        },
    },
});

export const { actions: scrollControllerActions } = scrollControllerSlice;
export const { reducer: scrollControllerReducer } = scrollControllerSlice;

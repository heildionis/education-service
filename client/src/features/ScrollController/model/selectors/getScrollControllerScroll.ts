import { createSelector } from '@reduxjs/toolkit';

import { StateSchema } from '@/app/providers/StoreProvider';

export const getScrollControllerScroll = (state: StateSchema) => state.scrollController.scroll;
export const getScrollControllerScrollByPath = createSelector(
    getScrollControllerScroll,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0,
);

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { LOCAL_STORAGE_ACCESS_TOKEN } from '@/shared/constants/localStorage';

export const rtkApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: __API__,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem(LOCAL_STORAGE_ACCESS_TOKEN) || '';

            if (token) headers.set('Authorization', `Bearer ${token}`);

            return headers;
        },
    }),
    endpoints: () => ({}),
    tagTypes: ['File', 'User'],
});

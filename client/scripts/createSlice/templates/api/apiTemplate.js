module.exports = (sliceName) => `import { rtkApi } from '@/shared/api/rtkApi';

const ${sliceName}Api = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        get: build.query<void, void>({
            query: () => ({
                url: '/',
            }),
        }),
    }),
});
`;

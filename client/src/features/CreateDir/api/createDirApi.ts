import { FileEntity } from '@/entities/File';
import { rtkApi } from '@/shared/api';

interface CreateDirProps {
    name: string;
    parentId?: number | null;
}

export const createDirApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        createDir: build.mutation<FileEntity, CreateDirProps>({
            query: ({ name, parentId }) => ({
                url: '/file',
                body: {
                    name,
                    type: 'dir',
                    parentId,
                },
                method: 'POST',
            }),
            invalidatesTags: ['File'],
        }),
    }),
});

export const useCreateDir = createDirApi.useCreateDirMutation;

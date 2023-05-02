import { FileEntity } from '@/entities/File';
import { rtkApi } from '@/shared/api';

interface FetchFileProps {
    parentId?: number | null;
}

interface GetFilesResult {
    files: FileEntity[];
    parentId: number | null;
    folder: FileEntity;
}

export const filesTableApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getFilesTable: build.query<GetFilesResult, FetchFileProps>({
            query: ({ parentId }) => ({
                url: `/file${parentId ? `?parentId=${parentId}` : ''}`,
            }),
        }),
    }),
});

export const useFilesTable = filesTableApi.useGetFilesTableQuery;
export const useLazyFilesTable = filesTableApi.useLazyGetFilesTableQuery;

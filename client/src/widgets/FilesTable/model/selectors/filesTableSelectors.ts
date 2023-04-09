import { StateSchema } from 'app/providers/StoreProvider';

export const getFilesTableData = (state: StateSchema) => state.filesTable?.data || [];
export const getFilesTableIsLoading = (state: StateSchema) => state.filesTable?.isLoading || false;
export const getFilesTableError = (state: StateSchema) => state.filesTable?.error || '';

import { StateSchema } from 'app/providers/StoreProvider';

export const getFilesPageData = (state: StateSchema) => state.filesPage?.data || [];
export const getFilesPageIsLoading = (state: StateSchema) => state.filesPage?.isLoading || false;
export const getFilesPageError = (state: StateSchema) => state.filesPage?.error;
export const getFilesPageDirStack = (state: StateSchema) => state.filesPage?.dirStack || [];
export const getFilesPageCurrentDir = (state: StateSchema) => state.filesPage?.currentDir;

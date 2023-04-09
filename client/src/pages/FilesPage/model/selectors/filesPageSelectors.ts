import { StateSchema } from 'app/providers/StoreProvider';

export const getFilesPageDirStack = (state: StateSchema) => state.filesPage?.dirStack || [];
export const getFilesPageCurrentDir = (state: StateSchema) => state.filesPage?.currentDir;

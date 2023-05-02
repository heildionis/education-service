import { StateSchema } from '@/app/providers/StoreProvider';

export const getCreateDirName = (state: StateSchema) => state.createDir?.name || '';
export const getCreateDirType = (state: StateSchema) => state.createDir?.type || 'dir';
export const getCreateDirParentId = (state: StateSchema) => state.createDir?.parentId;

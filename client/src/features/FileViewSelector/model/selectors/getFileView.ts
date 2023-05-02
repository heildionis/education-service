import { StateSchema } from '@/app/providers/StoreProvider';

export const getFileView = (state: StateSchema) => state.fileView?.view;

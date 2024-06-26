import {
    AnyAction,
    CombinedState,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { UserSchema } from '@/entities/User';
import { LoginSchema } from '@/features/AuthBy';
import { CreateDirSchema } from '@/features/CreateDir';
import { FileUploadSchema } from '@/features/FileUpload';
import { FileViewSchema } from '@/features/FileViewSelector';
import { RegistrationSchema } from '@/features/Registration';
import { ScrollControllerSchema } from '@/features/ScrollController';
import { FilesPageSchema } from '@/pages/FilesPage';
import { rtkApi } from '@/shared/api';

export interface StateSchema {
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>
    user: UserSchema;
    scrollController: ScrollControllerSchema;

    // Async reducers
    login?: LoginSchema;
    registration?: RegistrationSchema;
    fileView?: FileViewSchema;
    filesPage?: FilesPageSchema;
    createDir?: CreateDirSchema;
    fileUpload?: FileUploadSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
    getMountedRecuders: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    extra: ThunkExtraArg;
    rejectValue: T;
    state: StateSchema;
}

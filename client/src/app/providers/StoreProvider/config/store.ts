import { $api } from 'app/shared/api/api';
import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { registrationReducer } from 'features/AuthByUsername';
import { StateSchema, ThunkExtraArg } from './StateSchema';

export const createReduxStore = (initialState: StateSchema) => {
    const rootReducer: ReducersMapObject<StateSchema> = {
        user: userReducer,
        registration: registrationReducer,
    };

    const extraArg: ThunkExtraArg = { api: $api };

    const store = configureStore({
        reducer: rootReducer,
        preloadedState: initialState,
        devTools: __IS_DEV__,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg,
            },
        }),
    });

    return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']

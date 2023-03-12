import { $api } from 'shared/api/api';
import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { registrationReducer } from 'features/Registration';
import { loginReducer } from 'features/AuthBy';
import { StateSchema, ThunkExtraArg } from './StateSchema';

export const createReduxStore = (
    initialState: StateSchema,
    asyncReducers?: DeepPartial<StateSchema>,
) => {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        user: userReducer,
        registration: registrationReducer,
        login: loginReducer,
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

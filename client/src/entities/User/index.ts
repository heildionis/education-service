export { logout } from './model/services/logout';

export { checkAuth } from './model/services/checkAuth';
export { getUserIsLoading } from './model/selectors/getUserIsLoading/getUserIsLoading';
export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';

export { UserSchema, User, UserResponse } from './model/types/user';

export {
    userActions,
    userReducer,
} from './model/slice/userSlice';

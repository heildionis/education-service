export type UserRole = 'ADMIN' | 'USER' | 'MODERATOR'

export interface User {
    id: string;
    username: string;
    email: string;
    isActivated: boolean;
    role: UserRole;
}

export interface UserSchema {
    authData?: User;
    isLoading: boolean;
    error?: string;

    _inited: boolean;
}

export interface UserResponse {
    user: User;
    accessToken: string;
    refreshToken: string;
}

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
}

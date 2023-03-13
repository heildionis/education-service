import { Request } from 'express';

export interface CustomRequest<T> extends Request {
    body: T;
}

export interface CustomRequestWithCookie<T> extends Request {
	cookies: T;
}

export interface UserResponse {
    id: number,
    email: string,
    username: string,
    isActivated: false,
    role: string,
    iat: number,
    exp: number
}

export interface RequestWithUser extends Request {
	user: UserResponse;
}


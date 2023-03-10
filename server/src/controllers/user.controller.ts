import { NextFunction, Request, Response } from 'express';
import { userService } from './../services/user.service';
import ApiError from '../error/ApiError';
import dotenv from 'dotenv';
import { CustomRequest, CustomRequestWithCookie } from '../types/express';
import { CookieRefreshToken } from 'types/cookies';

dotenv.config();

const clientURL = process.env.ORIGIN_URL || 'http://localhost:3000';

export const Cookies = {
	REFRESH_TOKEN: {
		name: 'refreshToken',
		lifeTime: 30 * 24 * 60 * 60 * 1000
	}
} as const;


export interface UserLoginData {
    email?: string;
	username?: string
    password: string;
}

export interface UserRegistrationData {
    email: string;
	username: string
    password: string;
}

export class UserController {
	async login(
		req: CustomRequest<UserLoginData>, 
		res: Response, 
		next: NextFunction
	) {
		try {
			const { email, username, password } = req.body;

			let user;
			if (email) {
				user = await userService.loginByEmail(email, password);
			}
			if (username) {
				user = await userService.loginByUsername(username, password);
			}

			if (!user) {
				return next(ApiError.badRequest('USER DOESN`T EXIST'));
			}

			res.cookie(Cookies.REFRESH_TOKEN.name, user.refreshToken,{
				maxAge: Cookies.REFRESH_TOKEN.lifeTime,
				httpOnly: true,
			});

			return res.json(user);
		} catch (error) {
			next(error);
		}
	}
	async register(
		req: CustomRequest<UserRegistrationData>,
		res: Response,
		next: NextFunction
	) {
		try {
			const { email, username, password } = req.body;

			const user = await userService.registration(email, username, password);

			res.cookie(Cookies.REFRESH_TOKEN.name, user.refreshToken,{
				maxAge: Cookies.REFRESH_TOKEN.lifeTime,
				httpOnly: true,
			});

			return res.json(user);
		} catch (error) {
			next(error);
		}
	}
	async logout(
		req: CustomRequestWithCookie<CookieRefreshToken>,
		res: Response,
		next: NextFunction
	) {
		try {
			const {refreshToken}  = req.cookies;
			const token = await userService.logout(refreshToken);

			res.clearCookie(Cookies.REFRESH_TOKEN.name);

			return res.json(token);
		} catch (error) {
			next(error);
		}
	}
	async activate(
		req: Request,
		res: Response,
		next: NextFunction
	) {
		try {
			const activationLink = req.params.link;
			await userService.activate(activationLink);
			
			return res.redirect(clientURL);
		} catch (error) {
			next(error);
		}
	}
	async refresh(
		req: Request,
		res: Response, 
		next: NextFunction
	)  {
		try {
			const { refreshToken } = req.cookies;
			const userData = await userService.refresh(refreshToken);
			
			res.cookie(Cookies.REFRESH_TOKEN.name, userData.refreshToken, {
				maxAge: Cookies.REFRESH_TOKEN.lifeTime,
				httpOnly: true
			});

			return res.json(userData);
		} catch (error) {
			next(error);
		}
	}
}
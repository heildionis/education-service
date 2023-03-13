import {  Request, Response } from 'express';

import ApiError from '../error/ApiError';
import { tokenService } from '../services/token.service';

export const authMiddleware = (req: Request, res: Response, next: Function) => {
	try {
		const authorizationHeader = req.headers.authorization;
		if (!authorizationHeader) {
			return next(ApiError.unauthorized());
		}

		const accessToken = authorizationHeader.split(' ')[1];
		if (!accessToken) {
			return next(ApiError.unauthorized());
		}

		const userData = tokenService.validateAccessToken(accessToken);
		if (!userData) {
			return next(ApiError.unauthorized());
		}
		// @ts-ignore
		req.user = userData;
		next();
	} catch (e) {
		return next(ApiError.unauthorized());
	}
};

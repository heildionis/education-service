import { Response, Request } from 'express';
import ApiError from '../error/ApiError';

export const errorHandler = (err: any, req: Request, res: Response, next: any) => {
	if (err instanceof ApiError) {
		return res.status(err.status).json({ message: err.message });
	}
	return res.status(500).json({ message: 'Unknown error' });
};
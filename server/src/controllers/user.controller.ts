import { Request, Response } from 'express';
import { User } from '../models/models';

export class UserController {
	async login(req: Request, res: Response, next: Function)    {
		try {
			const user = await User.create({ 
				username: 'neospectrum', 
				password: 'root',
				email: 'neosperm@gmail.com'
			});

			return res.send(user);
		} catch (error) {
            
		}
	}
	async register(req: Request, res: Response, next: Function)  {
		try {
			return res.send();
		} catch (error) {
            
		}
	}
	async logout(req: Request, res: Response, next: Function)    {
		try {
			return res.send();
		} catch (error) {
            
		}
	}
	async refresh(req: Request, res: Response, next: Function)   {
		try {
			return res.send();
		} catch (error) {
            
		}
	}
}
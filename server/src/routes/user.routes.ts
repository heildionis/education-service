import { UserController } from '../controllers/user.controller';
import { Router } from 'express';

export const userRouter = Router();
const userController = new UserController();

userRouter.post('/login', userController.login);
userRouter.post('/register', userController.register);
userRouter.post('/logout', userController.logout);
userRouter.get('/refresh', userController.refresh);
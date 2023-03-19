import { UserController } from '../controllers/user.controller';
import { Router } from 'express';
// import { authMiddleware } from '../middlewares/auth.middleware';

export const userRouter = Router();
const userController = new UserController();

userRouter.post('/login', userController.login);
userRouter.post('/register', userController.register);
userRouter.post('/logout', userController.logout);
userRouter.get('/activate/:link', userController.activate);
userRouter.get('/refresh', userController.refresh);
// userRouter.get('/users', authMiddleware, userController.getUsers);
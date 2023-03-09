import { userRouter } from './user.routes';
import { Router } from 'express';

export const router = Router();

router.use('/user', userRouter);
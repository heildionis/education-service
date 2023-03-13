import { Router } from 'express';
import { userRouter } from './user.routes';
import { fileRouter } from './file.router';

export const router = Router();

router.use('/user', userRouter);
router.use('/file', fileRouter);
import { fileController } from './../controllers/file.controller';
import { Router } from 'express';
// import { authMiddleware } from 'middlewares/auth.middleware';

export const fileRouter = Router();

// fileRouter.get('/', authMiddleware, fileController.createDir);
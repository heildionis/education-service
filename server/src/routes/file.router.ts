import { fileController } from './../controllers/file.controller';
import { Router } from 'express';
import { authMiddleware } from '../middlewares/auth.middleware';

export const fileRouter = Router();

fileRouter.post('/', authMiddleware, fileController.createDir);
fileRouter.get('/', authMiddleware, fileController.getFiles);
fileRouter.post('/upload', authMiddleware, fileController.uploadFile);
fileRouter.post('/download', authMiddleware, fileController.downloadFile);
fileRouter.delete('/', authMiddleware, fileController.deleteFile);
import { fileController } from './../controllers/file.controller';
import { Router } from 'express';

export const fileRouter = Router();

fileRouter.get('/', fileController.createDir);
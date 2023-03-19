import { NextFunction, Response, Request } from 'express';
import { fileService } from '../services/file.service';
import { RequestWithUser } from 'types/express';
import { File } from '../models/models';

export class FileController {
	async createDir(req: RequestWithUser, res: Response, next: NextFunction) {
		try {
			// TODO: COMPLETE CONTROLLER
			const { name, parentId } = req.body;

			const user = req.user;
			
			const file = File.build({ name, type: 'dir', parentId, userId: user.id });
			const parentFile = await File.findOne({ where: { parentId } });

			if (!parentFile) {
				file.path = name;
				await fileService.createDir(file);
			} else {
				file.path = `${parentFile.path}\\${file.name}`;
				await parentFile.save();
			}
			await file.save();
			return res.json(file);
		} catch (error) {
			console.log(error);
			next(error);
		}
	}
}

export const fileController = new FileController();
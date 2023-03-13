import fs from 'fs';
import path from 'path';
import { staticFilePath } from '../static/files';
import { FileModel } from '../models/types/file';

export class FileService {
	createDir(file: FileModel) {
		const filePath = this.getPath(file);
		return new Promise((resolve, reject) => {
			try {
				if (!fs.existsSync(filePath)) {
					fs.mkdirSync(filePath);
					return resolve({ message: 'File was created' });
				} else {
					return reject({ message: 'File already exist' });
				}
			} catch (error) {
				return reject({ message: 'File error' });
			}
		});
	}
	getPath(file: FileModel) {
		return path.resolve(staticFilePath, `${file.userId}`, file.path);
	}
}

export const fileService = new FileService();
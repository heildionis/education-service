import fs from 'fs';
import { staticFilePath } from '../static/files';
import { FileModel } from '../models/types/file';
import { File } from '../models/models';
import { UserResponse } from 'types/express';
import ApiError from '../error/ApiError';

export class FileService {
	async generateDir(name: string, type: string, user: UserResponse, parentId: number | null) {
		const maxId: number = await File.max('id');
		const file = File.build({ 
			id: maxId + 1, 
			name,
			type, 
			parentId: parentId ? parentId : null,
			userId: user.id 
		});

		const parentFile = await File.findOne({ where: { id: parentId }});
		if (!parentFile) {
			file.path = name;
			await this.createDir(file);
		} else {
			file.path = `${parentFile.path}\\${file.name}`;
			await this.createDir(file);
		}

		await file.save();
		return file;
	}
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
	async uploadFile(file: any, user: UserResponse, parentId: number) {
		const parentDir = await File.findOne({ where: { id: parentId }});

		// if (!parentDir) {
		// 	throw ApiError.conflict('Parent directory does not exist');
		// }

		this.moveFile(user, file, parentDir);

		const type = this.getFileType(file);
		
		let filePath;
		if (parentDir) {
			filePath = parentDir.path + '\\' + file.name;
		}
		
		const maxId: number = await File.max('id');
		const uploadedFile = await File.create({
			id: maxId + 1,
			name: file.name, 
			type, 
			path: filePath, 
			size: file.size, 
			parentId: parentDir ? parentDir.id : null, 
			userId: user.id 
		});

		return uploadedFile;
	}
	async downloadFile(fileId: number, user: UserResponse): Promise<{ path: string, fileName: string }> {
		if (!fileId) {
			throw ApiError.badRequest('No query id');
		}

		const file = await File.findOne({ where: { id: fileId, userId: user.id } });
		if (!file) {
			throw ApiError.badRequest('File not found');
		}

		const path = this.getPath(file);
		if (fs.existsSync(path)) {
			return {
				path,
				fileName: file.name
			};
		}
		throw ApiError.badRequest('File not found');
	}
	moveFile(user: UserResponse, file: any, parentDir?: FileModel | null) {
		let path;
		if (parentDir) {
			path = `${staticFilePath}\\${user.id}\\${parentDir.path}\\${file.name}`;
		} else {
			path = `${staticFilePath}\\${user.id}\\${file.name}`;
		}

		if (fs.existsSync(file)) {
			throw ApiError.badRequest('File already exists');
		}
		file.mv(path);
	}
	deleteFile(file: FileModel) {
		const path = this.getPath(file);
		if (file.type === 'dir') {
			fs.rmdirSync(path);
		} else {
			fs.unlinkSync(path);
		}
	}
	getPath(file: FileModel) {
		return `${staticFilePath}\\${file.userId}\\${file.path}`;
	}
	getFileType(file: any) {
		const type = file.name.split('.').pop();
		return type;
	}
}

export const fileService = new FileService();
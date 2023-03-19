import { tokenService } from './token.service';
import { UserDto } from './../dtos/user.dto';
import ApiError from '../error/ApiError';
import { compare, genSaltSync, hashSync } from 'bcrypt';
import { File, User } from '../models/models';
import { v4 as uuidV4 } from 'uuid';
import { fileService } from './file.service';
import colors from 'colors';

export class UserService {
	async registration(email: string, username: string, password: string) {
		const candidate = await User.findOne({ where: { email }});
		if (candidate) {
			throw ApiError.conflict('User already exist!');
		}

		const salt = genSaltSync(5);
		const hashPassword = hashSync(password, salt);
		const activationLink = uuidV4();

		const user = await User.create({ 
			email,
			username,
			password: hashPassword, 
			activationLink,
		});

		// TODO: REMOVE IT
		await fileService.createDir(File.build({ path: '', userId: user.id, childId: user.id }));

		const userDto = new UserDto(user);
		const tokens = tokenService.generateTokens({ ...userDto });
		if (!tokens) {
			throw ApiError.badRequest('Token not found.');
		}

		await tokenService.saveToken(userDto.id, tokens.refreshToken);

		return {
			...tokens,
			user: userDto
		};
	}
	async loginByEmail(email: string, password: string) {
		const candidate = await User.findOne({ where: { email }});
		if (!candidate) {
			throw ApiError.badRequest('User doesnt exist, please register.');
		}

		const isCorrectPassword = compare(candidate.password, password);
		if (!isCorrectPassword) {
			throw ApiError.badRequest('Incorrect email or password!');
		}

		const userDto = new UserDto(candidate);
		const tokens = tokenService.generateTokens({ ...userDto });
		if (!tokens) {
			throw ApiError.badRequest('Token not found.');
		}

		await tokenService.saveToken(userDto.id, tokens.refreshToken);        

		return {
			...tokens,
			user: userDto
		};
	}
	async loginByUsername(username: string, password: string) {
		const candidate = await User.findOne({ where: { username }});
		if (!candidate) {
			throw ApiError.badRequest('User doesnt exist, please register.');
		}

		const isCorrectPassword = compare(candidate.password, password);
		if (!isCorrectPassword) {
			throw ApiError.badRequest('Incorrect email or password!');
		}

		const userDto = new UserDto(candidate);
		const tokens = tokenService.generateTokens({ ...userDto });
		if (!tokens) {
			throw ApiError.badRequest('Token not found.');
		}

		await tokenService.saveToken(userDto.id, tokens.refreshToken);        

		return {
			...tokens,
			user: userDto
		};
	}
	async logout(refreshToken: string) {
		if (!refreshToken) {
			throw ApiError.unauthorized('Unauthorized');
		}

		const token = await tokenService.removeToken(refreshToken);
		return token;
	}
	async activate(activationLink: string) {
		const user = await User.findOne({ where: { activationLink }});
		if (!user) {
			throw ApiError.badRequest('Invalid link.');
		}

		user.isActivated = true; 
		return user.save();
	}
	async refresh(refreshToken: string) {
		if (!refreshToken) {
			throw ApiError.unauthorized('Unauthorized.');
		}

		const userData = tokenService.validateRefreshToken(refreshToken);
		const token = await tokenService.findToken(refreshToken);

		if (!userData || !token) {
			throw ApiError.unauthorized('Unauthorized.');
		}

		if (typeof userData === 'string') {
			throw ApiError.unauthorized('Unauthorized.');
		}

		const user = await User.findOne({ where: { id: userData.id }});

		if (!user) {
			throw ApiError.unauthorized('User doesnt exist');
		}

		const userDto = new UserDto(user);
		const tokens = await tokenService.generateTokens({ ...userDto });

		if (!tokens) {
			throw ApiError.badRequest('Token not found.');
		}

		await tokenService.saveToken(userDto.id, tokens.refreshToken);

		return {
			...tokens,
			user: userDto
		};
	}
	async getAllUsers() {
		const users = await User.findAll();
		return users;
	}
}

export const userService = new UserService();
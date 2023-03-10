import { tokenService } from './token.service';
import { UserDto } from './../dtos/user.dto';
import ApiError from '../error/ApiError';
import { compare, genSaltSync, hashSync } from 'bcrypt';
import { User } from '../models/models';
import { v4 as uuidV4 } from 'uuid';

export class UserService {
	async registration(email: string, username: string, password: string) {
		const candidate = await User.findOne({ where: { email }});
		if (candidate) {
			throw ApiError.badRequest('CANDIDATE IS EXIST');
		}

		const salt = genSaltSync(5);
		const hashPassword = hashSync(password, salt);
		const activationLink = uuidV4();

		const user = await User.create({ 
			email,
			username,
			password: hashPassword, 
			activationLink 
		});

		const userDto = new UserDto(user);
		const tokens = tokenService.generateTokens({ ...userDto });
		if (!tokens) {
			throw ApiError.badRequest('TOKENS NOT FOUND');
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
			throw ApiError.badRequest('CANDIDATE NOT FOUND');
		}

		const isCorrectPassword = compare(candidate.password, password);
		if (!isCorrectPassword) {
			throw ApiError.badRequest('INCORRECT PASSWORD');
		}

		const userDto = new UserDto(candidate);
		const tokens = tokenService.generateTokens({ ...userDto });
		if (!tokens) {
			throw ApiError.badRequest('TOKENS NOT FOUND');
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
			throw ApiError.badRequest('CANDIDATE NOT FOUND');
		}

		const isCorrectPassword = compare(candidate.password, password);
		if (!isCorrectPassword) {
			throw ApiError.badRequest('INCORRECT PASSWORD');
		}

		const userDto = new UserDto(candidate);
		const tokens = tokenService.generateTokens({ ...userDto });
		if (!tokens) {
			throw ApiError.badRequest('TOKENS NOT FOUND');
		}

		await tokenService.saveToken(userDto.id, tokens.refreshToken);        

		return {
			...tokens,
			user: userDto
		};
	}
	async logout(refreshToken: string) {
		if (!refreshToken) {
			throw ApiError.badRequest('NO TOKEN WHILE LOGOUT');
		}

		const token = await tokenService.removeToken(refreshToken);
		return token;
	}
	async activate(activationLink: string) {
		const user = await User.findOne({ where: { activationLink }});
		if (!user) {
			throw ApiError.badRequest('USER DOESNT EXIST, CANNOT ACTIVATE');
		}

		user.isActivated = true; 
		return user.save();
	}
	async refresh(refreshToken: string) {
		if (!refreshToken) {
			throw ApiError.unauthorized();
		}

		const userData = tokenService.validateRefreshToken(refreshToken);
		const token = await tokenService.findToken(refreshToken);

		if (!userData || !token) {
			throw ApiError.unauthorized();
		}

		if (typeof userData === 'string') {
			throw ApiError.unauthorized();
		}

		const user = await User.findOne({ where: { id: userData.id }});

		if (!user) {
			throw ApiError.badRequest('USER DOESNT EXIST');
		}

		const userDto = new UserDto(user);
		const tokens = await tokenService.generateTokens({ ...userDto });

		if (!tokens) {
			throw ApiError.badRequest('TOKENS NOT FOUND');
		}

		await tokenService.saveToken(userDto.id, tokens.refreshToken);

		return {
			...tokens,
			user: userDto
		};
	}
}

export const userService = new UserService();
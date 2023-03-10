import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Token } from '../models/models';

dotenv.config();
interface Tokens {
    accessToken: string;
    refreshToken: string;
}

const accessKey = process.env.JWT_ACCESS_SECRET || 'accesssecretjsonwebtoken';
const refreshKey = process.env.JWT_REFRESH_SECRET || 'refreshsecretjsonwebtoken';

export class TokenService {
	generateTokens(payload: any): Tokens {
		const accessToken = jwt.sign(payload, accessKey, { expiresIn: '1d' });
		const refreshToken = jwt.sign(payload, refreshKey, { expiresIn: '30d' });

		return { accessToken, refreshToken };
	}
	validateAccessToken(accessToken: string) {
		const userData = jwt.verify(accessToken, accessKey);
		return userData;
	}
	validateRefreshToken(refreshToken: string) {
		const userData = jwt.verify(refreshToken, accessKey);
		return userData;
	}
	async saveToken(userId: number, refreshToken: string) {
		const tokenData = await Token.findOne({ where: { userId }});
		if (tokenData) {
			tokenData.refreshToken = refreshToken;
			return tokenData.save();
		}

		const token = await Token.create({ userId, refreshToken });
		return token;
	}
	async removeToken(refreshToken: string) {
		const tokenData = await Token.destroy({ where:{ refreshToken }});
		return tokenData;
	}
	async findToken(refreshToken: string) {
		const tokenData = await Token.findOne({ where:{ refreshToken }});
		return tokenData;
	}
}

export const tokenService = new TokenService();
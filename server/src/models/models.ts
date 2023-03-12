import { sequelize } from '../db';
import { DataTypes} from 'sequelize';
import { UserModel } from './types/user';
import { TokenModel } from './types/token';

export enum ModelNames {
    USER = 'user',
	TOKEN = 'token'
}

const User = sequelize.define<UserModel>(ModelNames.USER, {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	username: { type: DataTypes.STRING, allowNull: false },
	password: { type: DataTypes.STRING, allowNull: false },
	email: { type: DataTypes.STRING, allowNull: false },
	isActivated: { type: DataTypes.BOOLEAN, defaultValue: false },
	role: { type: DataTypes.STRING, defaultValue: 'USER' },
	activationLink: { type: DataTypes.STRING },
	firstname: { type: DataTypes.STRING, allowNull: true },
	lastname: { type: DataTypes.STRING, allowNull: true },
	avatar: { type: DataTypes.STRING, allowNull: true },
	country: { type: DataTypes.STRING, allowNull: true },
	city: { type: DataTypes.STRING },
	birthday: { type: DataTypes.DATE }
});

const Token = sequelize.define<TokenModel>(ModelNames.TOKEN, {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	refreshToken: { type: DataTypes.STRING }
});

User.hasOne(Token);
Token.belongsTo(User);

export {
	User,
	Token
};
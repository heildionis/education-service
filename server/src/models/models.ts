import { DataTypes } from 'sequelize';
import { FileModel } from './types/file';
import { sequelize } from '../db';
import { UserModel } from './types/user';
import { TokenModel } from './types/token';

export enum ModelNames {
    USER = 'user',
	TOKEN = 'token',
	FILE = 'file'
}

const User = sequelize.define<UserModel>(ModelNames.USER, {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	username: { type: DataTypes.STRING, allowNull: false, unique: true },
	email: { type: DataTypes.STRING, allowNull: false, unique: true },
	password: { type: DataTypes.STRING, allowNull: false, },
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

const File = sequelize.define<FileModel>(ModelNames.FILE, {
	id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
	name: { type: DataTypes.STRING },
	type: { type: DataTypes.STRING, allowNull: false },
	accessLink: { type: DataTypes.STRING },
	size: { type: DataTypes.INTEGER, defaultValue: 0 },
	path: { type: DataTypes.STRING, defaultValue: '' },
});

User.hasOne(Token);
Token.belongsTo(User);

User.hasMany(File);
File.belongsTo(User);

File.belongsTo(File, { as: 'parent', foreignKey: 'parentId' });
File.hasMany(File, { as: 'children', foreignKey: 'parentId' });

export {
	User,
	Token,
	File
};
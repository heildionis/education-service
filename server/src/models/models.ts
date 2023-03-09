import { sequelize } from '../db';
import { DataTypes} from 'sequelize';

export enum ModelNames {
    USER = 'user'
}

export enum UserRole {
    ADMIN = 'ADMIN',
    USER = 'USER',
    MODERATOR = 'MODERATOR'
}

const User = sequelize.define(ModelNames.USER, {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	username: {
		type: DataTypes.STRING,
		allowNull: false
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	email: {
		type: DataTypes.STRING
	},
	role: {
		type: DataTypes.STRING,
		defaultValue: UserRole.USER
	},
	firstname: {
		type: DataTypes.STRING,
		allowNull: true,
	},
	lastname: {
		type: DataTypes.STRING,
		allowNull: true,
	},
	avatar: {
		type: DataTypes.STRING,
		allowNull: true
	},
	country: {
		type: DataTypes.STRING,
		allowNull: true,
	},
	city: {
		type: DataTypes.STRING,
	},
	birthday: {
		type: DataTypes.DATE,
	}
});

export {
	User
};
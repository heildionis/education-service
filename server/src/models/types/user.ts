import { Model } from 'sequelize';

export type UserRole = 'USER' | 'ADMIN' | 'MODERATOR'

export interface UserModel extends Model {
	id: number;
	username: string;
	password: string;
	email: string;
    isActivated: boolean;
	activationLink: string;
	role: UserRole;
	firstname: string;
	lastname: string;
	avatar: string;
	country: string;
	city: string;
	birthday: Date;
}

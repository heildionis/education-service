import { UserModel, UserRole } from '../models/types/user';

export class UserDto {
	id: number;
	email: string;
	username: string;
	isActivated: boolean;
	role: UserRole;

	constructor (user: UserModel) {
		this.id = user.id;
		this.email = user.email;
		this.username = user.username;
		this.isActivated = user.isActivated;
		this.role = user.role;
	}
}
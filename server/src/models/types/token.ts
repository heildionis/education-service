import { Model } from 'sequelize';

export interface TokenModel extends Model {
    id: number;
    UserId: number;
    refreshToken: string;
}
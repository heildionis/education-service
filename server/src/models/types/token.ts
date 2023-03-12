import { Model } from 'sequelize';

export interface TokenModel extends Model {
    id: number;
    userId: number;
    refreshToken: string;
}
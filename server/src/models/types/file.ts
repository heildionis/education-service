import { Model } from 'sequelize';

export interface FileModel extends Model {
    id: number;
    name: string;
    type: string;
    accessLink: string;
    size: number;
    path: string;
    userId: number;
    childId: number;
    parentId: number;
}
import { FileType } from 'entities/File';

export interface CreateDirSchema {
    name: string;
    type: FileType;
    parentId?: number;
}

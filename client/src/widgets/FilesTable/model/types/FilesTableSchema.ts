import { FileEntity } from 'entities/File';

export interface FilesTableSchema {
    data?: FileEntity[];
    isLoading?: boolean;
    error?: string;
}

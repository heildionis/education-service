import { EntityState } from '@reduxjs/toolkit';
import { FileEntity, FileView } from 'entities/File';

export interface FilesPageSchema {
    data?: FileEntity[]
    isLoading?: boolean;
    error?: string;
    dirStack: Array<number | null>;
    currentDir: number | null;
}

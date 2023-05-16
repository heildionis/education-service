export type FileView = 'list' | 'tile'

export type FileType = 'file' | 'dir'

export interface FileEntity {
    id: number;
    name: string;
    type: FileType;
    size: number;
    path: string;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
    parentId: number;
    accessLink: null;
}

export interface FilePreviewType {
    [fileName: string]: number | null;
}

export interface BuildPaths {
    entry: string;
    build: string;
    src: string;
}

export type BuildMode = 'development' | 'production';

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
}
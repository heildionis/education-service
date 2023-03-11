import webpack from 'webpack';

import { BuildOptions } from './types/config';

export const buildResolvers = (options: BuildOptions): webpack.ResolveOptions => {
    const { paths } = options;

    return {
        extensions: ['.tsx', '.ts', '.js'],
        modules: [paths.src, 'node_modules'],
        alias: {},
        preferAbsolute: true,
        mainFiles: ['index'],
    };
};

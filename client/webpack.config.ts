import path from 'path';

import { buildWebpackConfig } from './config/build/buildWepbackConfig';
import { BuildEnv, BuildPaths, BuildProject } from './config/build/types/config';

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    };

    const apiUrl = env.apiUrl || 'http://localhost:5000/api';
    const port = env.port || 3000;

    const mode = env.mode || 'development';
    const isDev = mode === 'development';

    const project: BuildProject = 'production';

    const config = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port,
        apiUrl,
        project,
    });

    return config;
};

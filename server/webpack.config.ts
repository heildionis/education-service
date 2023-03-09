import { BuildPaths, BuildMode } from './config/build/types/config';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import path from 'path';

export default () => {
	const paths: BuildPaths = {
		entry: path.resolve(__dirname, 'src', 'index.ts'),
		build: path.resolve(__dirname, 'build'),
		src: path.resolve(__dirname, 'src')
	};

	const mode: BuildMode = 'development';

	const config = buildWebpackConfig({ mode, paths });
    
	return config;
};
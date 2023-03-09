import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/config';
import webpack from 'webpack';
import { buildLoaders } from './buildLoaders';

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
	const { mode, paths } = options;

	return {
		mode,
		target: 'node',
		entry: paths.entry,
		output: {
			filename: 'bundle.js',
			path: paths.build,
			clean: true
		},
		resolve: buildResolvers(options),
		plugins: [new webpack.ProgressPlugin()],
		module: {
			rules: buildLoaders()
		}
	};
};
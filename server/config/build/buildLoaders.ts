import type webpack from 'webpack';

export const buildLoaders = (): webpack.RuleSetRule[] => {
	const babelLoader = {
		test: /\.(js|ts)$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: ['@babel/preset-env'],
			},
		},
	};

	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};

	return [babelLoader, typescriptLoader];
};

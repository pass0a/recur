var path = require('path');

module.exports = {
	// Change to your "entry-point".
	entry: [ './src/index' ],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.bundle.js'
	},
	resolve: {
		extensions: [ '.ts', '.tsx', '.js', '.json' ]
	},
	module: {
		rules: [
			{
				// Include ts, tsx, js, and jsx files.
				test: /\.(ts)x?$/,
				exclude: /node_modules/,
				loader: 'ts-loader'
			},
			{
				// Include ts, tsx, js, and jsx files.
				test: /\.(js)x?$/,
				loader: 'babel-loader'
			}
		]
	},
	node: {
		// Replace these Node.js native modules with empty objects, Mongoose's
		// browser library does not use them.
		// See https://webpack.js.org/configuration/node/
		fs: 'empty',
		util: 'empty',
		events: 'empty',
		http: 'empty',
		dgram: 'empty',
		net: 'empty',
		buffer: 'empty',
		crypto: 'empty',
		dns: 'empty',
		assert: 'empty',
		stream: 'empty',
		os: 'empty',
		url: 'empty',
		querystring: 'empty',
		tls: 'empty',
		path: 'empty',
		tty: 'empty',
		module: 'empty',
		zlib: 'empty'
	},
	target: 'node',
	mode: 'production'
};

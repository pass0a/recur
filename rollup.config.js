// rollup.config.js
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import rollupTypescript from 'rollup-plugin-typescript';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default {
	input: 'src/index.ts',
	output: {
		file: 'dist/bundle.js',
		format: 'cjs'
	},
	external: [
		'fs',
		'util',
		'events',
		'http',
		'dgram',
		'net',
		'console',
		'buffer',
		'crypto',
		'dns',
		'assert',
		'stream',
		'os',
		'url',
		'querystring',
		'tls',
		'path',
		'tty',
		'module',
		'zlib'
	],
	plugins: [ json(), resolve({ preferBuiltins: false }), commonjs(), rollupTypescript(), babel() ]
};

const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const strips = [
	'console.log',
	'console.info',
	'console.warn',
	'console.error',
	'console.assert',
].map(strip => `strip[]=${strip}`).join(',');

module.exports = merge(common, {
	// ソースマップを有効にする
	plugins: [
		new UglifyJSPlugin()
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: `strip-loader?${strips}`
			}
		]
	}

});
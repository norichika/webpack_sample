const webpack = require('webpack');
const glob = require('glob-all');

//sourceファイル
const sourcePath = "./src";

//公開ディレクトリ
const distPath   = "public_html";
//global化スルＪＳ（Jquery, lodashなど）
const vendorPath = "/js/vendor.js";

//Entry Point配列
const entries    = {};
//書き出さないファイル（除外リスト）
const targets    = glob.sync([`${sourcePath}/**/*.js`, `!${sourcePath}/**/_util/*.js`, `!${sourcePath}/**/[_]*.js`]);

////Entry Point作成
targets.forEach(value => {
	const re = new RegExp(`${sourcePath}/`);
	const key = value.replace(re, '');
	entries[key] = value;
});

entries[vendorPath] = ['jquery', 'lodash'];

module.exports = {
	// エントリーポイントの指定
	entry : entries,
	// ファイルの出力設定
	output: {
		// 出力先のフォルダー名
		path    : `${__dirname}/${distPath}`,

		// 出力ファイル名
		filename: '[name]'
	},

	module: {
		rules: [
			{
				// 拡張子 .js の場合
				test: /\.js$/,
				use: [
					{
						// Babel を利用する
						loader: 'babel-loader',
						// Babel のオプションを指定する
						options: {
							presets: [
								// env を指定することで、ES2017 を ES5 に変換。
								// {modules: false}にしないと import 文が Babel によって CommonJS に変換され、
								// webpack の Tree Shaking 機能が使えない
								['env', {'modules': false}]
							]
						}
					}
				]
			},
			{
				test: require.resolve('jquery'),
				use: [{
					loader: 'expose-loader',
					options: 'jQuery'
				},{
					loader: 'expose-loader',
					options: '$'
				}]
			},
			{
				test: require.resolve('lodash'),
				use: [{
					loader: 'expose-loader',
					options: '_'
				}]
			}
		]
	},

	plugins: [
		// グローバル（ライブラリ化）devServerで開発するときはvendorファイル生成後、コメントアウト
		// new webpack.optimize.CommonsChunkPlugin({
		// 	name     : vendorPath,
		// 	filenam  : vendorPath,
		// 	minChunks: Infinity
		// })
	],

	// ローカル開発用環境を立ち上げる
	// ブラウザで http://localhost:8080/ でアクセスできるようになる
	devServer: {
		contentBase: distPath,
		port: 8080,
		open: true
	}

};
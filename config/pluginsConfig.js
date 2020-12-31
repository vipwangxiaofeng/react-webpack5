const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const { isEmptyDir } = require('./utils')
const isEmptyAssets = isEmptyDir(path.resolve(__dirname, '../assets'))
module.exports = {
	getPlugins: (env = 'development', options = []) => {
		return [
			// HMR 特性所需要的插件
			new webpack.HotModuleReplacementPlugin(),
			new FriendlyErrorsWebpackPlugin({
				compilationSuccessInfo: {
					messages: ['You application is running here http://localhost:9000'],
					notes: ['To create a production build, use yarn build.'],
				},
				clearConsole: true,
			}),

			...[env === 'production' && new CleanWebpackPlugin()].filter((item) => item),
			// https://www.webpackjs.com/guides/output-management/#%E8%AE%BE%E5%AE%9A-htmlwebpackplugin
			new HtmlWebpackPlugin({
				title: 'Webpack5-based - React+Typescript',
				template: 'public/index.html',
				meta: {
					viewport: 'width=device-width',
				},
			}),
			// 代码中注入全局成员
			new webpack.DefinePlugin({
				API_BASE_URL: JSON.stringify('https://api.example.com'),
			}),
			new MiniCssExtractPlugin({
				filename: 'css/[name].[contenthash:8].css',
				chunkFilename: 'css/[name].[contenthash:8].css',
			}),
			...[
				isEmptyAssets &&
					new CopyWebpackPlugin({
						patterns: [
							{ from: path.resolve(__dirname, '../assets'), to: 'assets' },
							// { from: path.resolve(__dirname,'../assets') , to: path.resolve(__dirname,'../dist/assets')}
						],
					}),
			].filter((item) => item),
			...options,
		]
	},
}

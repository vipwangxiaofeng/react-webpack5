/*
 * @Author: your name
 * @Date: 2020-12-31 15:00:27
 * @LastEditTime: 2021-01-04 16:46:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-webpack5-tmplate\config\pluginsConfig.js
 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { isEmptyDir } = require('./utils')
const isEmptyAssets = isEmptyDir(path.resolve(__dirname, '../assets'))
module.exports = {
  getPlugins: (env = 'development', options = []) => {
    const plugins = [
      new webpack.HotModuleReplacementPlugin(),
      new FriendlyErrorsWebpackPlugin({
        compilationSuccessInfo: {
          messages: ['You application is running here http://localhost:9000'],
          notes: ['To create a production build, use yarn build.'],
        },
        clearConsole: true,
      }),
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
      new BundleAnalyzerPlugin({
        analyzerMode: 'disabled', // 不启动展示打包报告的HTTP服务器
        generateStatsFile: true, // 要生成stats.json文件
      }),
      ...options,
    ]
    if (env === 'production') {
      plugins.push(new CleanWebpackPlugin())
      plugins.push(
        new CompressionWebpackPlugin({
          test: /\.js$|\.css$/,
          threshold: 1024,
        }),
      )
    }
    if (!isEmptyAssets) {
      plugins.push(
        new CopyWebpackPlugin({
          patterns: [{ from: path.resolve(__dirname, '../assets'), to: 'assets' }],
        }),
      )
    }
    return plugins
  },
}

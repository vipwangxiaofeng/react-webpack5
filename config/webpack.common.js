/*
 * @Author: your name
 * @Date: 2020-12-31 15:00:27
 * @LastEditTime: 2021-01-05 13:42:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-webpack5-tmplate\config\webpack.common.js
 */
const path = require('path')
const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  // ... 公共配置
  entry: { index: path.resolve(__dirname, '../src/index.tsx') },
  output: {
    filename: '[name].bundle.js', //[name] 是入口名称
    path: path.resolve(__dirname, '../dist'),
  },
  // https://www.webpackjs.com/configuration/devtool/
  devtool: isProd ? 'nosources-source-map' : 'eval-cheap-module-source-map',
  devServer: {
    contentBase: 'public',
    // 开启 HMR 特性，如果资源不支持 HMR 会 fallback 到 live reloading
    hot: true,
    port: 9000,
    open: true,
    // 启用 quiet 后，除了初始启动信息之外的任何内容都不会被打印到控制台
    quiet: true,
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },
  module: {
    strictExportPresence: true,
    rules: [],
  },
  plugins: [],
  optimization: {},
}

/*
 * @Author: your name
 * @Date: 2020-12-31 15:00:27
 * @LastEditTime: 2021-01-04 16:31:32
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \react-webpack5-tmplate\config\webpack.dev.js
 */
// ./webpack.prod.js
const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const { getLoaders } = require('./loaderConfig')
const { getPlugins } = require('./pluginsConfig')
const { getOptimization } = require('./optimizationConfig')
module.exports = merge(common, {
  // https://www.webpackjs.com/configuration/devtool/
  devtool: 'eval-cheap-module-source-map',
  // 生产模式配置
  mode: 'development',
  module: {
    strictExportPresence: true,
    rules: getLoaders('development'),
  },
  plugins: getPlugins('development'),
  optimization: getOptimization('development'),
})

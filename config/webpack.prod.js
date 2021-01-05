/*
 * @Author: your name
 * @Date: 2020-12-31 15:00:27
 * @LastEditTime: 2021-01-05 12:04:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-webpack5-tmplate\config\webpack.prod.js
 */
// ./webpack.prod.js
const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const { getLoaders } = require('./loaderConfig')
const { getPlugins } = require('./pluginsConfig')
const { getOptimization } = require('./optimizationConfig')
module.exports = merge(common, {
  // https://www.webpackjs.com/configuration/devtool/
  devtool: 'nosources-source-map',
  // 生产模式配置
  mode: 'production',
  module: {
    strictExportPresence: true,
    rules: getLoaders('production'),
  },
  plugins: getPlugins('development', {
    API_BASE_URL: JSON.stringify('https://api.example.com'),
    PUBLIC_URL: JSON.stringify('public'),
  }),
  optimization: getOptimization('production'),
})

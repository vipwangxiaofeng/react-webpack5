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
  plugins: getPlugins('production'),
  optimization: getOptimization('production'),
})

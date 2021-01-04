/*
 * @Author: your name
 * @Date: 2020-12-31 15:00:27
 * @LastEditTime: 2021-01-04 17:05:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-webpack5-tmplate\config\optimizationConfig.js
 */
const TerserWebpackPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
  // eslint-disable-next-line no-unused-vars
  getOptimization: (env = 'development', options = []) => {
    console.log(env)
    return {
      usedExports: true,
      // // 压缩输出结果
      // minimize: true,
      // // 尽可能合并每一个模块到一个函数中
      // concatenateModules: true,
      splitChunks: {
        // 自动提取所有公共模块到单独 bundle
        // chunks: 'all',
        chunks: 'async',
        cacheGroups: {
          common: {
            name: 'common',
            chunks: 'all',
            priority: -20,
            minChunks: 2,
            reuseExistingChunk: true,
          },
          vendors: {
            name: 'vendors',
            test: /[\\/]node_modules[\\/]/,
            chunks: 'all',
            priority: -10,
          },
          react: {
            name: 'react',
            test: /[\\/]node_modules[\\/](scheduler|react|react-dom|prop-types)/,
            chunks: 'all',
            enforce: true,
          },

          // styles: {
          // 	name: 'styles',
          // 	test: /\.css$/,
          // 	chunks: 'all',
          // 	enforce: true,
          // },
        },
      },
      minimizer: [new TerserWebpackPlugin(), new CssMinimizerPlugin()],
      ...options,
    }
  },
}

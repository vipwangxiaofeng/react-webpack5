/*
 * @Author: your name
 * @Date: 2020-12-31 15:00:27
 * @LastEditTime: 2021-01-05 14:00:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-webpack5-tmplate\config\loaderConfig.js
 */
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  getLoaders: (env = 'development', options = []) => {
    return [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        // exclude: /node_modules/,
        include: path.resolve(__dirname, '../src'),
        loader: 'eslint-loader',
        enforce: 'pre',
        options: {
          cache: true,
          fix: true,
          emitError: true,
          emitWarning: true,
          // eslint options (if necessary)
        },
      },
      { parser: { requireEnsure: false } },
      {
        oneOf: [
          {
            test: /\.css$/,

            // 分离css请查看 https://www.webpackjs.com/plugins/extract-text-webpack-plugin/
            // use: ['style-loader', 'css-loader'],
            use: [env === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
          },
          {
            test: /\.less$/,
            use: [
              {
                loader: env === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
              },
              {
                loader: 'css-loader',
              },
              {
                loader: 'less-loader',
                options: {
                  lessOptions: {
                    strictMath: true,
                  },
                },
              },
            ],
          },
          {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader'],
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: ['file-loader'],
          },
          {
            test: /\.(js|jsx|ts|tsx)$/,
            include: path.resolve(__dirname, '../src'),
            use: [
              {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
                  cacheDirectory: true,
                  cacheCompression: false,
                  compact: env === 'production',
                },
              },
            ],
          },
          {
            test: /\.(js|mjs)$/,
            exclude: /@babel(?:\/|\\{1,2})runtime/,
            loader: require.resolve('babel-loader'),
            options: {
              babelrc: false,
              configFile: false,
              compact: false,
              presets: ['@babel/preset-env', '@babel/preset-react'],
              cacheDirectory: true,
              cacheCompression: false,
              compact: env === 'production',
            },
          },
          ...options,
        ],
      },
    ]
  },
}

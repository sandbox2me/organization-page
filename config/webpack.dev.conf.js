'use strict'

const utils = require('./utils');
const webpack = require('webpack');
const config = require('./env.index');
const apiConfig = require('./api');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const portfinder = require('portfinder');

const { join, resolve } = require('path');
const htmlParams = require('./htmlParams');

const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  devtool: config.dev.devtool,

  devServer: merge(apiConfig, {
    clientLogLevel: 'warning',
    historyApiFallback: true,
    hot: true,
    compress: true,
    host: process.env.HOST || config.dev.host,
    port: process.env.PORT || config.dev.port,
    overlay: config.dev.errorOverlay ? { warnings: false, errors: true } : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true,
    watchOptions: { poll: config.dev.poll },
  }),
  plugins: [
    new webpack.DefinePlugin(
      {
        'process.env': require('./env.development')
      }
    ),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin(
      {
        filename: 'index.html',
        template: './src/index.html',
        inject: true,
        params: htmlParams.dev,
      }
    ),
    new BrowserSyncPlugin(
      {
        notify: false,
        host: config.dev.host,
        port: config.dev.browsersyncPort,
        tunnel: config.dev.tunnel,
        browser: "google chrome",
        proxy: 'http://' + config.dev.host + ':' + config.dev.port,
        ui: {
            port: config.dev.browsersyncUiPort,
            weinre: {
                port: config.dev.browsersyncWeinrePort
            }
        },
      },
      {
        reload: false
      }
    )
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      process.env.PORT = port
      devWebpackConfig.devServer.port = port

      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Приложение собрано успешно. \n `],
        },
        onErrors: config.dev.notifyOnErrors ? utils.createNotifierCallback() : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})

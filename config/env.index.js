'use strict'
const path = require('path')

module.exports = {
  dev: {
    assetsSubDirectory: 'assets/',
    assetsPublicPath: '/',
    proxyTable: {},
    host: 'localhost',
    tunnel: false,
    port: 8000,
    browsersyncPort: 8001,
    browsersyncUiPort: 8002,
    browsersyncWeinrePort: 8003,
    
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false,
    devtool: 'eval',
    cacheBusting: true,
    cssSourceMap: true,
  },

  build: {
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: '',
    assetsPublicPath: './',
    productionSourceMap: true,
    devtool: '#source-map',
    productionGzip: true,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  }
}

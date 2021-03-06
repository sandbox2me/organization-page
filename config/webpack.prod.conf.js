'use strict'

const path = require('path');
const utils = require('./utils');
const webpack = require('webpack');
const config = require('./env.index');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');

const env = require('./env.production');
const htmlParams = require('./htmlParams');

const webpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true,
      usePostCSS: true,
    })
  },
  devtool: config.build.productionSourceMap ? config.build.devtool : false,
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env
    }),
    
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: config.build.productionSourceMap,
      parallel: true
    }),
    
    new ExtractTextPlugin({
      filename: utils.assetsPath('css/[name].[contenthash].css'),
      allChunks: false
    }),

    new OptimizeCSSPlugin({
      cssProcessorOptions: config.build.productionSourceMap ? { safe: false, map: { inline: false } } : { safe: true }
    }),

    new HtmlWebpackPlugin({
      filename: config.build.index,
      template: './src/index.html',
      inject: true,
      params: htmlParams.prod,
      minify: {
        removeComments: true,
        useShortDoctype: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeScriptTypeAttributes: true,
        collapseInlineTagWhitespace: true,
        removeStyleLinkTypeAttributes: true
      },
      chunksSortMode: 'dependency'
    }),

    new webpack.HashedModuleIdsPlugin(),
    
    new webpack.optimize.ModuleConcatenationPlugin(),
    
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'app',
      async: 'vendor-async',
      children: true,
      minChunks: 3
    }),

    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../src/assets'),
        to: config.build.assetsSubDirectory,
        ignore: ['.*', 'styles/*', 'img/content/*']
      }
    ])
  ]
})

if (config.build.productionGzip) {
  const CompressionWebpackPlugin = require('compression-webpack-plugin')

  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

if (config.build.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig

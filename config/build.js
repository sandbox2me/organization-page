'use strict'

process.env.NODE_ENV = 'production'

const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('./env.index')
const webpackConfig = require('./webpack.prod.conf')

const spinner = ora('Сборка проекта...')
spinner.color = 'green';
spinner.start()

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Произошла ошибка во время сборки.\n'))
      process.exit(1)
    }

    console.log(chalk.green('  Сборка выполнена успешно.\n'))
  })
})

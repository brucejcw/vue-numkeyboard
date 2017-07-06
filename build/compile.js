const path = require('path');
const webpack = require('webpack');
const chalk = require('chalk');
const webpackConfig = require('./webpack.compile');
const shell = require('shelljs');
const rootPath = process.cwd()
const static = path.resolve(rootPath, 'static')
const packageJson = path.resolve(static, 'package.json');
const name = require(packageJson).name;
const output = path.resolve(rootPath, name);

shell.rm('-rf', output)
webpack(webpackConfig, function(err, stats) {
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n\n');

  shell.cp('-R', static + '/**/*', output);

  console.log(chalk.green.bold('> Compile Succeed'));
})


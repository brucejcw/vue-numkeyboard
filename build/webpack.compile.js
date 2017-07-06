var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var rootPath = process.cwd()

const packageJson = path.resolve(rootPath, 'static/package.json');
const name = require(packageJson).name;

module.exports = {
  entry: path.resolve(rootPath, 'src', name),
  output: {
    path: path.resolve(rootPath, 'dist', name),
    publicPath: '/',
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract([
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ])
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    alias: {
      'libs': path.resolve(rootPath, './src', 'libs')
    }
  },

  externals: {
    'vue': 'vue'
  },

  plugins: [
    new ExtractTextPlugin('style.css'),
    // new webpack.optimize.UglifyJsPlugin({
    //   sourceMap: true,
    //   compress: {
    //     warnings: false
    //   }
    // }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]
}
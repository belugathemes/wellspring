/**
 * Webpack :: Development
 */

const LiveReloadPlugin = require('webpack-livereload-plugin');
const path = require('path');

module.exports = {
  cache: true,
  devtool: 'cheap-module-eval-source-map',
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /(\.js|\.jsx)$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, 'src')
      },
    ]
  },
  plugins: [
    new LiveReloadPlugin()
  ]
};

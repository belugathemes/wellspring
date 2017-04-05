/**
 * Webpack :: Production
 */

const OfflinePlugin = require('offline-plugin');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
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
    new OfflinePlugin({
      AppCache: false
    }),
    new UglifyJSPlugin()
  ]
};

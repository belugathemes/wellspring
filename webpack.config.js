/**
 *   Webpack Configuration
 * =============================================================================
 */
const LiveReloadPlugin = require('webpack-livereload-plugin');
const path = require('path');

module.exports = {
  cache: true,
  context: path.resolve(__dirname, 'src'),
  entry: {
    'app.js': './index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]',
  },
  module: {
    rules: [
      {
        test: /(\.js|\.jsx)$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, 'src'),
      },
    ]
  },
  plugins: [
    new LiveReloadPlugin()
  ]
};

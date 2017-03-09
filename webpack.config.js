/**
 *   Webpack Configuration
 * =============================================================================
 */
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
  cache: true,
  context: __dirname + '/src',
  entry: {
    'app.js': './index.js',
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name]',
  },
  module: {
    rules: [
      {
        test: /(\.js|\.jsx)$/,
        loader: 'babel-loader',
        include: __dirname + '/src',
      },
    ]
  },
  plugins: [
    new LiveReloadPlugin()
  ]
};

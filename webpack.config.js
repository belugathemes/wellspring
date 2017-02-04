/**
 *   Webpack Configuration
 * =============================================================================
 */
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
  cache: true,
  context: __dirname + '/src',
  entry: {
    'appshell.css': './appshell/appshell.scss',
    'content.css': './content.scss',
    'content.js': './content.js',
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
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader!postcss-loader!sass-loader'
        }),
        include: __dirname + '/src',
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name]'),
    new LiveReloadPlugin()
  ]
};

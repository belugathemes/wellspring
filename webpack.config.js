/**
 *   Webpack Configuration
 * =============================================================================
 */
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
  cache: true,
  context: __dirname + "/src",
  entry: {
    'appshell.css': './appshell/appshell.scss',
    'content.css': './content.scss',
    'content.js': './content.jsx',
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name]',
  },
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        include: __dirname + '/src',
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader'),
        include: __dirname + '/src',
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name]'),
    new LiveReloadPlugin()
  ]
};

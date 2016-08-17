var ExtractTextPlugin = require("extract-text-webpack-plugin");
var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
  cache: true,
  entry: {
    'css/appshell.css': './src/appshell/appshell.scss',
    'css/content.css': './src/content/content.scss',
    'js/content.js': './src/content/content.jsx',
  },
  output: {
    path: __dirname,
    filename: '[name]',
  },
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader'),
        include: path.join(__dirname, 'src'),
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name]'),
    new LiveReloadPlugin()
  ]
};

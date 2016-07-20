module.exports = {
  entry: './src/app.jsx',
  output: {
    path: 'js',
    filename: 'app.js',
  },
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        include: __dirname + '/src',
      }
    ]
  }
};

    "babel": "^6.23.0",
    "babel-core": "^6.21.0",
    "babel-loader": "^7.1.4",
    "babel-preset-es2015": "^6.18.0",
    "webpack": "^4.8.3",
    "webpack-cli": "^2.1.4",
    "webpack-dev-server": "^3.1.9"

    const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src/components/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, 'bower_components')
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
    ]
  },

  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css']
  },

  devtool: 'source-map',

  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 9000
  }
};

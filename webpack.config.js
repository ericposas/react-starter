const path = require('path');
const PugPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [ 'babel-polyfill', './src/index.js' ],
  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: './index.js'
  },
  mode: 'development',
  watchOptions: {
    ignored: /node_modules/
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env','@babel/react']
          }
        }
      },
      {
        test: /\.(png|jpg)$/,
        use: ['file-loader?name=./images/[name].[ext]']
      },
      {
        test: /\.pug$/,
        use: ['html-loader?attrs=false', 'pug-html-loader']
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new PugPlugin({
      filename: './index.html',
      template: './src/index.pug',
      inject: false
    })
  ]
};

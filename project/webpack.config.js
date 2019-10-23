var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
    template : './src/index.html',
    title: "Interview Pick",
    filename : 'index.html'
    })
  ],
  module: {
    rules: [
      { test: /\.css$/,use: [ 'style-loader', 'css-loader' ]},
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.(png|jpg|jpng|eot|ttf)$/, loader: 'url-loader?limit=8192&name=images/[name].[ext]'}
    ]
  },
  devServer: {port: 9000}
};

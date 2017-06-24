const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const distUrl = 'dist';

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './public/index.html',
  inject: true,
});

const HotModuleReplacementPluginConfig = new webpack.HotModuleReplacementPlugin();

module.exports = {
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    './src/index.js',
  ],
  output: {
    path: path.resolve(distUrl),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: ['react-hot-loader/webpack', 'babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|^(?!.*\.inline\.svg$).*\.svg$/,
        loader: 'url-loader',
      },
    ],
  },
  plugins: [
    HtmlWebpackPluginConfig,
    HotModuleReplacementPluginConfig,
  ],
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, distUrl),
    publicPath: '/',
    historyApiFallback: true,
    disableHostCheck: true,
  },
};

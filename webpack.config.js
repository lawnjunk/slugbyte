'use strict';

require('dotenv').load();

const webpack = require('webpack');
const HTMLPlugin = require('html-webpack-plugin');
const ExtactText = require('extract-text-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');

const production = process.env.NODE_ENV === 'production';

let plugins = [
  new ExtactText('bundle.css'),
  new HTMLPlugin({template: `${__dirname}/client/index.html`}),
  new webpack.DefinePlugin({
    __DEBUG__: JSON.stringify(!production),
    __API_URL__: JSON.stringify('luwat bs uri'),
  }),
];

//if(production){
  //plugins = plugins.concat([
    //new CleanPlugin(),
  //]);
//}

module.exports = {
  plugins,
  devtool: 'eval',
  entry: `${__dirname}/client/entry.js`,
  output: {
    path: `${__dirname}/build`,
    filename: `[hash].js`,
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader', 
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader', 
      },
      {
        test: /\.scss$/,
        loader: ExtactText.extract([
          {loader: 'css-loader'},
          {
            loader:'sass-loader', 
            options: {
              includePaths: `${__dirname}/app/scss`,
            },
          },
        ]), 
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.md$/,
        loader: 'html-loader', 
      },
      {
        test: /\.svg$/,
        loader: 'url-loader',
      },
      {
        test: /\.png$/,
        loader: 'url-loader',
      },

    ],
  },
};

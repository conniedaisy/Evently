var path = require('path')
var webpack = require('webpack')

'use strict';

module.exports = {
  entry: "./client/main.js",
  output: {
    path: path.join(__dirname, 'build'),
    filename: "bundle.js"
    // publicPath: 'http://localhost:3000/events'
  },
  module: {
    loaders: [
      {
        test: /\.css$/, 
        loader: "style!css" 
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.json$/,
        loaders: [ 'json' ],
        exclude: /node_modules/,
        include: __dirname
      }
    ]
  }
};
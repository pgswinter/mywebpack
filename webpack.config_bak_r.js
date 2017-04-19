const path = require('path');
const webpack = require('webpack');
const prod = process.argv.indexOf('-p') !== -1;
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
var HTMLWebpackPlugin = require('html-webpack-plugin')

var setPlugin = []
var entry
var cssIdentifier
// var cssLoader = []

const config = {
  devtool: 'source-map',
  entry: entry,
  plugins: setPlugin,
  module: {
      loaders: [{
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: '/node_modules/'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loaders: ['url-loader?limit=10000&name=images/[hash:12].[ext]'],
        exclude: '/node_modules/'
      },
      {
        test: /\.css$/,
        // loaders: cssLoader,
        loaders: ['style-loader','css-loader?localIdentName=[path][name]---[local]'],
        exclude: '/node_modules/'
      },
      {
        test: /\.jsx$/,
        loaders: ['babel'],
        exclude: '/node_modules/'
      }
      ]
  },
  output: {
      // path: __dirname,
      // filename: "dist/bundle.js"
      path: path.join(__dirname, 'dist'),
      publicPath: '/dist/',
      filename: "bundle.js"
  },

}

if (prod) {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {'NODE_ENV': `"production"`}})

    );
} else {
  config.plugins.push(new webpack.DefinePlugin({
      'process.env': {
          'NODE_ENV': `""`
      }
  }));
}

config.plugins = config.plugins||[];

var DEVELOPMENT = process.env.NODE_ENV === 'development';
var PRODUCTION = process.env.NODE_ENV === 'production';

if (PRODUCTION) {
  setPlugin = [new webpack.optimize.UglifyJsPlugin({

    // comments: true,
    // mangle: false,
    // compress: {
    //  warnings: true
    // }

  }),
  // new ExtractTextPlugin('style.css')
  // new HTMLWebpackPlugin({
  //  template: 'index-template.html'
  // })
  ];
  // config.entry =  ['./src/index.js']
  config.entry =  ['./app/app.js']

  // cssIdentifier =  '[hash:base64:10]';
  // cssLoader = ExtractTextPlugin.extract({
  //   loader: 'css-loader?localIdentName='+cssIdentifier
  // })
} else {
  setPlugin = [new webpack.HotModuleReplacementPlugin()];
  // config.entry = [
  //     './src/index.js',
  //     'webpack/hot/dev-server',
  //     'webpack-dev-server/client?http://localhost:8080'
  //   ];
  config.entry = [
      './app/app.js',
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8080'
    ];

  // cssIdentifier =  '[path][name]---[local]';
  // cssLoader = ['style-loader','css-loader?localIdentName=' + cssIdentifier];
}

module.exports = config
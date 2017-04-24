const path = require('path');
const webpack = require('webpack');
const prod = process.argv.indexOf('-p') !== -1;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// var HTMLWebpackPlugin = require('html-webpack-plugin')

var setPlugin = [
  new ExtractTextPlugin('style.css'),
  new webpack.ProvidePlugin({   
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
  })
  ]
var entry
var cssIdentifier
var cssLoaderDEV 
// var cssLoaderDEV = ['style-loader','css-loader?localIdentName=[path][name]---[local]']
// var cssLoaderPROD = ['style-loader','css-loader?localIdentName=[hash:base64:10]']
var cssLoaderPROD

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
        test: /\.sass$/,
        // loaders: cssLoaderDEV,
        loaders: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: "css-loader",
                    // options: {
                    //   minimize: true || {}
                    // }
                }, {
                    loader: "sass-loader"
                }]
              }),
        exclude: '/node_modules/'
      },
      {
        test: /\.jsx$/,
        loaders: ['babel'],
        exclude: '/node_modules/'
      },
     {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=public/fonts/[name].[ext]',
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
  	// 	warnings: true
  	// }

  })
  // new HTMLWebpackPlugin({
  // 	template: 'index-template.html'
  // })
  ];
  // config.entry =  ['./src/index.js']
  config.entry =  ['./career/index.js']

  // cssIdentifier =  '[hash:base64:10]';
  // cssLoaderPROD = ExtractTextPlugin.extract({
  //   loader: 'css-loader?localIdentName='+cssIdentifier
  // })
  // cssLoaderPROD = ExtractTextPlugin.extract({fallback: 'style-loader',use: 'css-loader'})
} else {
  setPlugin = [new webpack.HotModuleReplacementPlugin()];
  // config.entry = [
  //     './src/index.js',
  //     'webpack/hot/dev-server',
  //     'webpack-dev-server/client?http://localhost:8080'
  //   ];
  config.entry = [
      './career/index.js',
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8080'
    ];

  // cssIdentifier =  '[path][name]---[local]';
  // cssLoader = ['style-loader','css-loader?localIdentName=' + cssIdentifier];
  // cssLoaderDEV = ExtractTextPlugin.extract({fallback: 'style-loader',use: 'css-loader'})
}

module.exports = config
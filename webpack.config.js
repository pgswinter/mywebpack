const path = require('path'),
	webpack = require('webpack'),
	prod = process.argv.indexOf('-p') !== -1;

var setPlugin = []
var entry
var cssLoader

const config = {
  devtool: 'source-map',
	entry: [
      './src/index.js',
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8080'
    ],
  plugins:setPlugin,
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
      // {
      //   test: /\.css$/,
      //   loaders: cssLoader,
      //   exclude: '/node_modules/'
      // }
      ]
  },
  output: {
      path: __dirname,
      filename: "dist/bundle.js"
  },

}

config.plugins = config.plugins||[];

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

if (process.env.NODE_ENV === 'production') {
  setPlugin = [new webpack.optimize.UglifyJsPlugin()];
  // entry =  ['./src/script.js']
  // const cssIdentifier =  '[hash:base64:10]';
  // cssLoader = ExtractTextPlugin.extract({
  //   loader: 'css-loader?localIdentName='+cssIdentifier
  // })
} else {
  setPlugin = [ new webpack.HotModuleReplacementPlugin() ];
  // entry = [
  //     './src/index.js',
  //     'webpack/hot/dev-server',
  //     'webpack-dev-server/client?http://localhost:8080'
  //   ]
  // const cssIdentifier =  '[path][name]---[local]';
  // cssLoader = ['style-loader','css-loader?localIdentName=' + cssIdentifier]
}

module.exports = config
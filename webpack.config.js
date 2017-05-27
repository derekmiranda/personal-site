const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const WDS_PORT = 8000;
const extractCSS = new ExtractTextPlugin('/styles.css');
const plugins = [
  extractCSS,
  new webpack.HotModuleReplacementPlugin(),
];

if (process.env.MODE = 'production') {
  plugins.concat([
    new webpack.optimize.UglifyJsPlugin(),
  ]);
}

module.exports = {
  entry: [
    './client',
  ],
  output: {
    filename: 'bundle.js',
    publicPath: `http://127.0.0.1:${WDS_PORT}/`,
    path: path.resolve(__dirname, 'dist'),
  },
  plugins,
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: [path.resolve(__dirname, './client')],
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /(\.css|\.scss|\.sass)$/,
        include: [path.resolve(__dirname, './client/css')],
        // loaders: ['style-loader', 'css-loader', 'sass-loader'],
        use: extractCSS.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader!sass-loader',
        }),
      },
      {
        test: /\.json$/, 
        loaders: ['json-loader'],
      }
    ]
  },
  // devServer: {
  //   contentBase: './public',
  //   inline: true,
  //   hot: true,
  // },
}
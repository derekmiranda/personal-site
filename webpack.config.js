const path = require('path');
const webpack = require('webpack');

const WDS_PORT = 8000;
const plugins = [
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
    path: path.resolve(__dirname, 'public/dist'),
    publicPath: 'dist'
  },
  watch: true,
  plugins,
  module: {
    loaders: [
      {
        test: /\.js$/,
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
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ]
  },
  devServer: {
    contentBase: './public',
    inline: true,
    hot: true,
  },
}
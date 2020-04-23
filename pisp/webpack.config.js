const webpack = require('webpack')
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/pisp.js'),
  output: {
    filename: 'pisp.js',
    library: 'pisp',
    libraryTarget: 'amd',
    path: path.resolve(__dirname, 'build/pisp'),
  },
  mode: 'production',
  module: {
    rules: [
      {parser: {System: false}},
      {
        test: /\.js$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader'
      },
      {
        test: /\.krem.css$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        use: [
          {
            loader: 'kremling-loader',
            options: {
              namespace: 'pisp',
              postcss: {
                plugins: {
                  'autoprefixer': {}
                }
              }
            },
          },
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['build/pisp']),
    CopyWebpackPlugin([
      {from: path.resolve(__dirname, 'src/pisp.js')}
    ]),
  ],
  devtool: 'source-map',
  externals: [
    /^@portal\/*/,
    /^lodash$/,
    /^single-spa$/,
    /^rxjs\/?.*$/,
    /^react$/,
    /^react\/lib.*/,
    /^react-dom$/,
    /.*react-dom.*/,
  ],
}

/* eslint-env node */
const webpack = require("webpack");
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src/aisp.js"),
  output: {
    filename: "aisp.js",
    library: "aisp",
    libraryTarget: "amd",
    path: path.resolve(__dirname, "build/aisp")
  },
  mode: "production",
  module: {
    rules: [
      { parser: { System: false } },
      {
        test: /\.js?$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        exclude: [path.resolve(__dirname, "node_modules"), /\.krem.css$/],
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[path][name]__[local]"
            }
          },
          {
            loader: "postcss-loader",
            options: {
              plugins() {
                return [require("autoprefixer")];
              }
            }
          }
        ]
      },
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, "node_modules")],
        exclude: [/\.krem.css$/],
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.krem.css$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        use: [
          {
            loader: "kremling-loader",
            options: {
              namespace: "aisp",
              postcss: {
                plugins: {
                  autoprefixer: {}
                }
              }
            }
          }
        ]
      }
    ]
  },
  resolve: {
    modules: [__dirname, "node_modules"]
  },
  plugins: [
    new CleanWebpackPlugin(["build/aisp"]),
    CopyWebpackPlugin([{ from: path.resolve(__dirname, "src/aisp.js") }])
  ],
  devtool: "source-map",
  externals: [
    /^@portal\/*/,
    /^lodash$/,
    /^single-spa$/,
    /^rxjs\/?.*$/,
    /^react$/,
    /^react\/lib.*/,
    /^react-dom$/,
    /.*react-dom.*/
  ]
};

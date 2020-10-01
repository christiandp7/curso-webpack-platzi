const path = require("path");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    home: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          "style-loader", // es mas eficiente

          "css-loader", // entiende que puede importarse codigo css en javascript
          "post-css",
        ],
      },
      {
        test: /\.less$/,
        use: [
          "style-loader", // es mas eficiente
          "css-loader", // entiende que puede importarse codigo css en javascript
          "less-loader",
        ],
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // es mas eficiente
          "css-loader", // entiende que puede importarse codigo css en javascript
          "sass-loader",
        ],
      },
      {
        test: /\.styl$/,
        use: [
          "style-loader", // es mas eficiente
          "css-loader", // entiende que puede importarse codigo css en javascript
          "stylus-loader",
        ],
      },
      {
        test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 50000, //limite de archivos en bytes
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: "Webpack Dev Server | Hot Reload!",
      template: path.resolve(__dirname, "index.html"),
    }),
    /*new MiniCSSExtractPlugin({
      filename: "css/[name].css",
    }),*/
  ],
  devServer: {
    hot: true,
    open: true,
    port: 3000,
  },
};

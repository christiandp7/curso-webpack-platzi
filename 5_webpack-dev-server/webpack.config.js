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
        test: /\.css$/,
        use: [
          /*{
            loader: MiniCSSExtractPlugin.loader,
          },*/
          "style-loader", // es mas eficiente
          "css-loader", // entiende que puede importarse codigo css en javascript
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: "Webpack Dev Server | Hot Reload!",
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

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    home: path.resolve(__dirname, "src/index.js"),
    contact: path.resolve(__dirname, "src/contact.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
    //publicPath: "dist/",
    chunkFilename: "js/[id].[chunkhash].js",
  },
  mode: "production",
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
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          //"postcss-loader",
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader", // entiende que puede importarse codigo css en javascript
          "less-loader",
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader", // entiende que puede importarse codigo css en javascript
          "sass-loader",
        ],
      },
      {
        test: /\.styl$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
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
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "css/[id].css",
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: "Webpack Dev Server | Hot Reload!",
      template: path.resolve(__dirname, "index.html"),
    }),
    new webpack.DllReferencePlugin({
      manifest: require("./modules-manifest.json"),
    }),
  ],
};

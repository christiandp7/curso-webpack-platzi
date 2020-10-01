const path = require("path");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
          {
            loader: MiniCSSExtractPlugin.loader,
          },
          "css-loader", // entiende que puede importarse codigo css en javascript
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Plugins",
    }),
    new MiniCSSExtractPlugin({
      filename: "css/[name].css",
    }),
  ],
};

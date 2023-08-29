const path = require('path');
const MinCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: "./src/javascripts/main.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: 'javascripts/main.js',
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          // loaderは下から順番に使用される。順番間違えると動かない。
          {
            loader: MinCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.(png|jpg)/,
        use: [
          {
            //loader: "url-loader",
            loader: "file-loader",
            options: {
              esModule: false,
              name: "images/[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MinCssExtractPlugin({
      filename: './stylesheets/main.css',
    }),
    new HtmlWebpackPlugin({
      template: "./src/templates/index.html",
    }),
    new CleanWebpackPlugin(),
  ],
}
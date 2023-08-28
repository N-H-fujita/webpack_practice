const path = require('path');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          // loaderは下から順番に使用される。順番間違えると動かない。
          {
            loader: 'style-loader'
          },
          {
            loader: "css-loader",
          },
        ],
      },
    ],
  },
}
const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    hot: true,
    port: 3000
  }
});

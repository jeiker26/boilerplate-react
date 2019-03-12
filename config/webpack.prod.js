const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  devtool: false,
  mode: "production",
  plugins: [new webpack.optimize.ModuleConcatenationPlugin()]
});

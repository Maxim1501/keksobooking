const path = require("path");

module.exports = {
  entry: "./source/js/main.js",
  devtool: "source-map",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "build/source/js"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};

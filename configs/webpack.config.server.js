const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  name: "server",
  entry: {
    server: path.resolve(process.cwd(), "server/index.tsx"),
  },
  mode: "production",
  output: {
    path: path.resolve(process.cwd(), "dist"),
    filename: "[name].js",
  },
  mode: process.env.NODE_ENV || "development",
  resolve: {
    extensions: [".ts", ".tsx"],
  },
  externals: [nodeExternals()],
  target: "node",
  node: {
    __dirname: false,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          configFile: path.resolve(process.cwd(), "configs", "tsconfig.server.json"),
        },
      },
    ],
  },
};

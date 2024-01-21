const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const webpack = require("webpack");
const ESLintPlugin = require("eslint-webpack-plugin");
const deps = require("./package.json").dependencies;
const TerserPlugin = require("terser-webpack-plugin");

module.exports = (env) => {
  require("dotenv").config({ path: `./.env.${env.branch}` });
  return {
    devtool: "source-map",
    entry: ["./src/index.js"],
    mode: "development",
    devServer: {
      static: {
        directory: path.join(__dirname, "dist"),
      },
      port: 8002,
    },
    output: {
      publicPath: "auto",
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: "babel-loader",
          exclude: /node_modules/,
          options: {
            presets: ["@babel/preset-react"],
          },
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.ttf$/,
          use: ["file-loader"],
        },
      ],
    },
    optimization: {
      minimize: false ,
      minimizer: [new TerserPlugin()],
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env": JSON.stringify(process.env), // To make environment variables available in the React code
      }),
      new ModuleFederationPlugin({
        name: "child_b",
        library: { type: "var", name: "child_b" },
        filename: "remoteEntry.js",
        exposes: {
          "./layout": "./src/layout",
        },
        shared: {
          react: { singleton: true, requiredVersion: deps["react"] },
          "react-dom": { singleton: true, requiredVersion: deps["react-dom"] },
        },
      }),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        base:"auto",
      }),
      new webpack.ProvidePlugin({
        process: "process/browser",
        React: "react",
      }),

      new ESLintPlugin({
        extensions: ["js", "jsx"],
      }),
    ],
  };
};

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const Dotenv = require("dotenv-webpack");
const webpack = require("webpack");
const ESLintPlugin = require("eslint-webpack-plugin");
const deps = require("./package.json").dependencies;
const CopyWebpackPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = (env) => {
  return {
    devtool: "source-map",
    entry: ["./src/index.js"],
    mode: "development",
    devServer: {
      historyApiFallback: true,
      static: {
        directory: path.join(__dirname, "dist"),
      },
      port: 8000,
    },
    output: {
      publicPath: "/",
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          type: "javascript/auto",
          resolve: {
            fullySpecified: false,
          },
          loader: "babel-loader",
          exclude: /node_modules/,
          options: {
            presets: [
              "@babel/preset-env",
              ["@babel/preset-react", { runtime: "automatic" }],
            ],
          },
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
          exclude: /node_modules/,
          use: ["file-loader?name=[name].[ext]"],
        },
        {
          test: /\.(gif|png|svg|jpg|jpeg|ico|ttf)$/,
          loader: "file-loader",
          options: {
            name: "[path][name].[ext]",
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
    resolve: {
      extensions: [".js", ".jsx", ".ttf"],
    },
    optimization: {
      minimize:  false,
      minimizer: [new TerserPlugin()],
    },
    plugins: [
      new Dotenv({
        path: `.env.${env.branch}`, // Path to .env file (this is the default)
      }),
      new webpack.DefinePlugin({
        "process.env": JSON.stringify(process.env), // To make environment variables available in the React code
      }),
      new ModuleFederationPlugin({
        name: "parent",
        remotes: {
          child_a: `child_a@//localhost:8001/remoteEntry.js`,
          child_b: `child_b@//localhost:8002/remoteEntry.js`,
        },
        shared: {
          react: { singleton: true, requiredVersion: deps["react"] },
          "react-dom": { singleton: true, requiredVersion: deps["react-dom"] },
        },
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, "./public"),
            to: path.resolve(__dirname, "dist/public"),
          },
        ],
      }),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        base: "/",
      }),
      new ESLintPlugin({
        extensions: ["js", "jsx"],
      }),
    ],
  };
};

const path = require('path');
const webpack = require('webpack');
const { readJsonSync } = require('fs-extra');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const WebpackAssetsManifest = require('webpack-assets-manifest');
const ESLintPlugin = require('eslint-webpack-plugin');
const Dotenv = require('dotenv-webpack');
// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();

// const DIST_DIR = path.resolve(__dirname, '..', 'dist');
// const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
// const STATIC_DIR = path.resolve(__dirname, '..', 'static');

const packageJsonPath = path.resolve(process.cwd(), 'package.json');
const packageJson = readJsonSync(packageJsonPath, { throws: false });

console.debug('Version: ', packageJson.version);

module.exports = {
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    moduleIds: 'named',
  },
  plugins: [
    new Dotenv(),
    /* new Dotenv({
      path: './some.other.env', // load this now instead of the ones in '.env'
      safe: true, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
      allowEmptyValues: true, // allow empty variables (e.g. `FOO=`) (treat it as empty string, rather than missing)
      systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
      silent: true, // hide any errors
      defaults: false, // load '.env.defaults' as the default values if empty.
      prefix: 'import.meta.env.', // reference your env variables as 'import.meta.env.ENV_VAR'.
    }), */
    new ESLintPlugin({
      extensions: ['js', 'ts', 'tsx'],
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html',
      favicon: './public/favicon.ico',
      manifest: './public/manifest.json',
    }),
    new webpack.DefinePlugin({
      'process.env.APPLICATION_HOST': JSON.stringify(process.env.APPLICATION_HOST),
      'process.env.API_HOST': JSON.stringify(process.env.API_HOST),
      'process.env.APPLICATION_VERSION': JSON.stringify(packageJson.version),
    }),
    /* new webpack.EnvironmentPlugin({
      'process.env.NODE_ENV': process.env.NODE_ENV,
    }), */
    /* new HtmlWebpackPlugin({
            template: "src/index.html", // to import index.html file inside index.js
        }), */
  ],
  devServer: {
    port: 3030, // you can change the port
  },
  module: {
    rules: [
      {
        test: /\.[j|t]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            // presets: ['@babel/preset-env', '@babel/preset-typescript'],
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          },
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
            },
          },
          {
            loader: '@svgr/webpack',
            options: {
              babel: false,
              icon: true,
              prettier: false,
              svgo: false,
              svgoConfig: {
                plugins: [{ removeViewBox: false }],
              },
              titleProp: true,
              ref: true,
            },
          },
        ],
        type: 'javascript/auto',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(ico)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
    },
    extensions: ['.tsx', '.ts', '.js', '.json'],
  },
};

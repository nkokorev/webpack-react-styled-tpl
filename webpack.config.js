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

const PROJECT_DIR = process.cwd();
const SOURCE_DIR = path.resolve(PROJECT_DIR, 'src');
const OUTPUT_DIST_DIR = path.resolve(PROJECT_DIR, 'dist');

const packageJsonPath = path.resolve(PROJECT_DIR, 'package.json');
const packageJson = readJsonSync(packageJsonPath, { throws: false });

console.debug('Version: ', packageJson.version);

module.exports = {
  entry: path.join(SOURCE_DIR, 'index.tsx'),
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: OUTPUT_DIST_DIR,
  },
  optimization: {
    moduleIds: 'named',
  },
  plugins: [
    new Dotenv(),
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
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          },
        },
      },
      /*      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }, */
      {
        assert: { type: 'css' },
        rules: [
          {
            loader: 'css-loader',
            options: {
              exportType: 'css-style-sheet',
              // Other options
            },
          },
          {
            loader: 'sass-loader',
            options: {
              // Other options
            },
          },
        ],
      },
      /* {
        test: /\.((c|sa|sc)ss)$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              // Run `postcss-loader` on each CSS `@import` and CSS modules/ICSS imports, do not forget that `sass-loader` compile non CSS `@import`'s into a single file
              // If you need run `sass-loader` and `postcss-loader` on each CSS `@import` please set it to `2`
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
          // Can be `less-loader`
          {
            loader: 'sass-loader',
          },
        ],
      }, */
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
      /* {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }, */
      /* {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
        ],
      }, */
      // For webpack v5
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
      src: SOURCE_DIR,
    },
    extensions: ['.tsx', '.ts', '.js', '.json'],
  },
};

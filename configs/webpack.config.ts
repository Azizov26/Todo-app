import ESLintPlugin from 'eslint-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {Configuration as WebpackConfiguration} from 'webpack';
import {Configuration as WebpackDevServerConfiguration} from 'webpack-dev-server';
import {getModulesRules, getOutput, resolve} from './common-webpack-params';
import {Mode, paths} from './constans';

interface Configuration extends WebpackConfiguration {
  devServer: WebpackDevServerConfiguration;
}

const config = (env: Record<string, string>): Configuration => ({
  mode: Mode.Development,
  target: 'web',
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
      },
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
      },
    }),
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
    }),
  ],
  devtool: 'source-map',
  entry: paths.entry,
  output: getOutput,
  devServer: {
    static: {
      directory: paths.contentBase,
      publicPath: '/',
    },
    port: 3000,
  },
  module: {
    rules: getModulesRules(Mode.Development),
  },
  resolve,
}
);

export default config;

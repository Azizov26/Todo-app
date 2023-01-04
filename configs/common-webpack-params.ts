import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import {
  Mode, moduleFileExtensions, paths,
} from './constans';


export const getModulesRules = (mode: Mode) => ([
  {test: /\.(html)$/, use: ['html-loader']},
  {
    test: /\.(s[ac]|c)ss$/i,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      'postcss-loader',
      'sass-loader',
    ],
  },
  {
    test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
    type: mode !== Mode.Production ? 'asset' : 'asset/resource',
  },
  {
    test: /\.(woff2?|eot|ttf|otf)$/i,
    type: 'asset/resource',
  },
  {
    test: /\.(js|ts)x?$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
    },
  },
]);

export const getOutput = {
  filename: 'bundle.js',
  path: path.resolve(__dirname, 'dist'),
};

export const resolve = ({
  extensions: moduleFileExtensions.map(ext => `.${ext}`),
  alias: {
    '@': paths.src,
    'styles': paths.styles,
  },
});

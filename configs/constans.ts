import * as fs from 'fs';
import * as path from 'path';

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath: string): string => path.resolve(appDirectory, relativePath);

export enum Mode {
  Development = 'development',
  Production = 'production',
}
export const moduleFileExtensions = [
  'js',
  'jsx',
  'ts',
  'tsx',
  'less',
  'json',
  'scss',
];

export const paths = {
  entry: resolveApp('src/index.tsx'),
  template: resolveApp('public/index.html'),
  contentBase: resolveApp('public'),

  src: resolveApp('src'),
  assets: resolveApp('src/assets'),
  styles: resolveApp('src/styles'),
  build: resolveApp('build'),
  nodeModules: resolveApp('node_modules'),
  antThemeLessFile: resolveApp('src/styles/ant-theme.less'),
  root: resolveApp(''),
};

const plugins = [];

if (process.env.NODE_ENV === 'development') {
  plugins.push('react-refresh/babel');
}

module.exports = {
  presets: [
    '@babel/preset-typescript',
    ['@babel/preset-env',
      {
        'useBuiltIns': 'usage',
        'corejs': 3,
      }],
    '@babel/preset-react',
  ],
  plugins,
};

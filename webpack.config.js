const path = require('path');

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
		minimize: isProd
  },
  mode: 'development',
  watch: !isProd,
};

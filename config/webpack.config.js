const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const paths = require('./paths');

module.exports = {
  entry: [paths.indexJs],
  output: {
    filename: 'static/js/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: paths.src,
        loader: require.resolve('babel-loader'),
        options: {
          cacheDirectory: true,
        },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: paths.indexHtml,
      filename: 'index.html',
    }),
  ],
};

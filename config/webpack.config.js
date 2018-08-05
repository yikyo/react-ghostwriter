const Webpack = require('webpack');
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
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: paths.indexHtml,
      filename: 'index.html',
    }),
    new Webpack.HotModuleReplacementPlugin(),
  ],
  stats: {
    colors: true,
  },
  devtool: 'source-map',
};

const autoprefixer = require('autoprefixer');
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
        oneOf: [
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            use: {
              loader: 'url-loader',
              options: {
                limit: 10000,
                name: 'static/media/[name].[hash:8].[ext]',
              },
            },
          },
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
              },
            },
          },
          {
            test: /\.(css|scss)$/,
            use: [
              {
                loader: 'style-loader',
              },
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                  modules: true,
                  camelCase: true,
                  localIdentName: '[local]--[hash:base64:5]',
                },
              },
              {
                loader: 'postcss-loader',
                options: {
                  ident: 'postcss',
                  plugins: () => [
                    require('postcss-flexbugs-fixes'),
                    autoprefixer({
                      browsers: [
                        '>1%',
                        'last 4 versions',
                        'Firefox ESR',
                        'not ie < 9',
                      ],
                      flexbox: 'no-2009',
                    }),
                  ],
                },
              },
              {
                loader: 'sass-loader',
              },
            ],
          },
        ],
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

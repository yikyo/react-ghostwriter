const autoprefixer = require('autoprefixer');
const Webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const paths = require('./paths');
const env = require('./env');

module.exports = {
  entry: [paths.indexJs],
  output: {
    filename: 'static/js/bundle.js',
    publicPath: '/',
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
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: [
              {
                loader: require.resolve('ts-loader'),
                options: {
                  transpileOnly: true,
                },
              },
            ],
          },
          {
            test: /\.(css|scss)$/,
            use: [
              {
                loader: 'style-loader',
              },
              {
                loader: 'typings-for-css-modules-loader',
                options: {
                  modules: true,
                  namedExport: true,
                  camelCase: true,
                  minimize: true,
                  localIdentName: '[local]_[hash:base64:5]',
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
          {
            exclude: [/\.(js|jsx)$/, /\.(ts|tsx)$/, /\.html$/, /\.json$/],
            loader: require.resolve('file-loader'),
            options: {
              name: 'static/media/[name].[hash:8].[ext]',
            },
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
    new Webpack.DefinePlugin(env()),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  devServer: {
    historyApiFallback: true,
  },
  stats: {
    colors: true,
  },
  devtool: 'source-map',
};

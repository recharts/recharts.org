var path = require('path');
var fs = require('fs');
var webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: [
      'webpack-hot-middleware/client',   // Automatic Refresh
      './src/app',
    ],
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
    publicPath: '/static/',
  },

  devServer: {
    contentBase: __dirname + '/src',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        use: ['babel-loader'],
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'file-loader',
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            query: {
              includePaths: [
                path.resolve(__dirname, './src/styles'),
                path.resolve(__dirname, './node_module/simple-line-icons/sass'),
              ],
              sourceMap: true,
              sourceMapContents: true,
            }
          }
        ]
      },
    ],
  },

  resolve: {
    alias: {
      'react': path.join(__dirname, 'node_modules', 'react'),
      'components': path.join(__dirname, './src/components'),
      'layouts': path.join(__dirname, './src/layouts'),
      'views': path.join(__dirname, './src/views'),
      'utils': path.join(__dirname, './src/utils'),
      'styles': path.join(__dirname, './src/styles'),
      'docs': path.join(__dirname, './src/docs'),
    },
  },

  plugins: [
    new webpack.DefinePlugin({
      __DEV__: true,
      __DEVTOOLS__: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};

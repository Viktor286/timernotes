const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextCSS = new ExtractTextPlugin('css/[name]_[hash:8].css');
const CopyWebpackPlugin = require('copy-webpack-plugin');

function $root(target){
  return path.resolve(__dirname, '../', target);
}

module.exports = {
  entry: {
    main: $root('./src/main.js'),
    babel_polyfill: [
      'babel-polyfill'
    ],
    react: [
      'react',
      'react-dom'
      // 'redux',
      // 'react-redux',
      // 'redux-thunk',
      // 'prop-types',
      // 'reselect'
    ]
  },
  output: {
    path: $root('./app'),
    filename: 'js/[name]_bundle_[hash:8].js'
  },
  optimization: {
    nodeEnv: 'production',
    minimize: true,
    splitChunks: {
      cacheGroups: {
        babel_polyfill: {
          name: "react",
          test: "react",
          enforce: true,
          chunks: 'all'
        },
        react: {
          name: "babel_polyfill",
          test: "babel_polyfill",
          enforce: true,
          chunks: 'all'
        }
      }
    }
  },
  // devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [$root('./src')],
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ["env", {
                targets: {
                  browsers: ["last 2 versions", "safari >= 7", "not ie <= 10"]
                },
                useBuiltIns: true,
                uglify: true,
                modules: false,
                debug: true,
              }],
              "react"
            ]
          }
        }
      },
      {
        test: /\.less$/,
        include: $root('./src/css'),
        use: ExtractTextCSS.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                url: false, // https://github.com/webpack-contrib/css-loader#url
                minimize: true,
                sourceMap: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [autoprefixer({browsers: ['> 1%', 'IE >= 10']})],
              },
            },
            {
              loader: 'less-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['app'], {
      root: $root('./')
    }),
    ExtractTextCSS,
    new HtmlWebpackPlugin({
      template: $root('./src/html-templates/basic-template.html'),
      filename: 'index.html'
    }),
    new CopyWebpackPlugin([
      {
        from: $root('./src/assets/'),
        to: 'assets',
        toType: 'dir'
      }
    ])
  ]
};

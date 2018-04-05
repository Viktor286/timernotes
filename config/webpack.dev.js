const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

function $root(target){
  return path.resolve(__dirname, '../', target);
}

module.exports = {
  entry: {
    main: $root('./src/main.js')
  },
  output: {
    path: $root('./app'),
    filename: '[name]_bundle_[hash:8].js',
    // publicPath: '/assets/'
  },
  devServer: {
    // contentBase: path.join(__dirname, "app"),
    overlay: true,
    // headers: {"Origin": "http://foo.example"}
  },
  devtool: 'eval',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [$root('./src')],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["env", "react", "react-hmre"]
          }
        }
      },
      {
        test: /\.less$/,
        include: [$root('./src/css')],
        use: [
          {loader: "style-loader"},
          {loader: "css-loader"},
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer({browsers: ['> 1%', 'IE >= 10']})],
            },
          },
          {loader: "less-loader"}]
      }
    ]
  },
  plugins: [
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

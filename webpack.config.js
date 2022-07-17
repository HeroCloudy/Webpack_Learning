const path = require('path')
const ESLintWebpackPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const commonPostcssLoader = {
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      plugins: [
        'postcss-preset-env'
      ]
    }
  }
}

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/bundle.js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          commonPostcssLoader
        ]
      },
      {
        test: /\.s[ca]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          commonPostcssLoader,
          'sass-loader',
        ]
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          commonPostcssLoader,
          'less-loader',
        ]
      },
      {
        test: /\.styl$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          commonPostcssLoader,
          'stylus-loader'
        ]
      },
      {
        test: /\.(avi|mp3|ttf|woff2?)$/,
        type: 'asset/resource',
        generator: {
          filename: 'resources/[hash:10][ext][query]'
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg?)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024
          }
        },
        generator: {
          filename: 'img/[hash:10][ext][query]'
        }
      },
      {
        test: /.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new ESLintWebpackPlugin({
      context: path.resolve(__dirname, 'src')
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'template/index.html')
    }),
    new MiniCssExtractPlugin({
      filename: 'css/index.css'
    })
  ],
  mode: 'development'
}

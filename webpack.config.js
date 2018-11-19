const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const webpack = require('webpack')
const host = require('ip').address()

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/dist/",
    filename: 'js/app.js'
  },
  devServer: {
    port: 9902,
    host,
    historyApiFallback: {
      index: '/dist/'
    },
    proxy: {
      '/manage': {
        target: 'http://adminv2.happymmall.com',
        changeOrigin: true
      },
      '/user/logout.do': {
        target: 'http://adminv2.happymmall.com',
        changeOrigin: true
      },
    }
  },
  resolve: {
    alias: {
      src: resolve('src'),
      api: resolve('src/api'),
      page: resolve('src/page'),
      utils: resolve('src/utils'),
      style: resolve('src/style'),
      component: resolve('src/component')
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['lodash'],
            presets: ['env', 'react']
          }
        }
      }, {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }, {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }, {
        test: /\.(png|jpe?g|gif)$/,
        use: [{
          loader: 'url-loader', options: { limit: 8192, name: 'res/[name].[ext]' }
        }]
      }, {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        use: [{
          loader: 'url-loader', options: { limit: 8192, name: 'res/[name].[ext]' }
        }]
      }
    ]
  },
  plugins: [
    new LodashModuleReplacementPlugin,
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './favicon.ico'
    }),
    new ExtractTextPlugin("css/[name].css"),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'js/base.js'
    })
  ]
}

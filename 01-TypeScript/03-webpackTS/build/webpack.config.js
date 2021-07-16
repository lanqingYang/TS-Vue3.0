const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const isProd = process.env.NODE_ENV === 'production' // 是否生产环境

function resolve (dir) {
  return path.resolve(__dirname, '..', dir)
}

module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: {
    app: './src/main.ts'  //程序主入口文件
  },

  output: {
    path: resolve('dist'),   //输出文件放到dis文件下
    filename: '[name].[contenthash:8].js' 
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        include: [resolve('src')]  //src中的ts文件
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin({
    }),   //dist目录中，把以前打包的dist清掉

    new HtmlWebpackPlugin({
      template: './public/index.html'     //当前目录的html进行打包
    })
  ],

  resolve: {
    extensions: ['.ts', '.tsx', '.js']  //扩展名处理， 以后文件可以不写它的扩展名
  },

  devtool: isProd ? 'cheap-module-source-map' : 'cheap-module-eval-source-map',  //错误代码提示信息

  devServer: {
    host: 'localhost', // 主机名
    stats: 'errors-only', // 打包日志输出输出错误信息
    port: 8081,
    open: true
  },
}
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
  mode: 'production', // 打包模式，production模式压缩打包后的代码。development表示不压缩
  entry: { // 入口文件，可以配置多个入口
    main: './src/index.js',
    sub: './src/index.js'
  },
  module: { // 打包模块
    rules: [ // 规则，以数组形式存在
      {
        test: /\.(jpg|png|gif)/, // 匹配的文件
        use: {
          /**
           * url-loader和file-loader区别
           *url-loader会将图片转换为base64,可以将小图片打包到js代码中，如果是大图片，规定图片大小范围
           */
          // loader: 'file-loader', // 使用的打包工具,loader就是一个打包方案，只要不是js文件，就要想到使用loader,如vue文件，使用vue-loader
          loader: 'url-loader',
          options: {
            name: '[name]_[hash].[ext]', // 希望打包的图片名称和以前图片名字一样,在名字后面添加一个hash值
            outputPath: 'images/', // 表示将图片打包到images文件下
            limit: 2048 // 图片大于2048不会打包到js中，小于2048图片转换为base64
          }
        }
      },
      {
        test: /\.(css|scss)$/, // 匹配的文件
        use: [
          'style-loader',
          'css-loader',
          // {
          //   loader: 'css-loader',
          //   options: {
          //     module: false, // 表示样式模块打包
          //     importLoaders: 2 // 在scss文件中引入scss文件，@import '文件名' 也要走‘sass-loader’和‘postcss-loader’，以保证引入文件从下往上都会执行
          //   }
          // },// 打包样式需要使用这两个loader
          'sass-loader', // 使用第三方css语法样式
          'postcss-loader'
        ]
      }
    ]
  },
  // 使用插件
  /**
   * HtmlWebpackPlugin插件会在打包结束后自动生成一个html文件，并把打包生成的js自动引入到这个html文件中
   * plugins： 可以在webpack运行到某一个时刻帮你做一些事情。
   */
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'// 接收一个html模板文件
    }),
    new CleanWebpackPlugin() // 打包前删除dist文件
  ],
  output: {
    publicPath: 'http://Romen.com.cn', // 希望打包后html加载是重服务端加载来的。即公共路径
    //filename: 'bundle.js', // 打包后的文件，如果没有此配置，生成的文件是main.js,
    filename: '[name]_[hash].js',// 使用占位符表示打包出口的文件名和入口文件名相同,打包完成后会出现多个js文件。有几个入口就有几个出口文件
    path: path.resolve(__dirname, 'dist') // 打包后放到哪一个文件夹下，绝对路径
  },
}

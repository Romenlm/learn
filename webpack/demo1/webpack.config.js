const path = require('path')
module.exports = {
  mode: 'production', // 打包模式，production模式压缩打包后的代码。development表示不压缩
  entry: { // 入口文件
    main: './src/index.js'
  },
  output: {
    filename: 'bundle.js', // 打包后的文件
    path: path.resolve(__dirname, 'dist') // 打包后放到哪一个文件夹下，绝对路径
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
          {
            loader: 'css-loader',
            options: {
              module: true, // 表示样式模块打包
              importLoaders: 2 // 在scss文件中引入scss文件，@import '文件名' 也要走‘sass-loader’和‘postcss-loader’，以保证引入文件从下往上都会执行
            }
          },// 打包样式需要使用这两个loader
          'sass-loader', // 使用第三方css语法样式
          'postcss-loader'
        ]
      }
    ]
  }
}

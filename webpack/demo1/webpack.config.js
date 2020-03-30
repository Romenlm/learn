const path = require('path')
module.exports = {
  mode: 'production', // 打包模式，production模式压缩打包后的代码。development表示不压缩
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: 'bundle.js', // 打包后的文件
    path: path.resolve(__dirname,'dist') // 打包后放到哪一个文件夹下，绝对路径
  }
}

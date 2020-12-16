/**
 * postcss-loader配置文件
 * @type {{plugins: [*]}}
 */
module.exports = {
  plugins: [
      require('autoprefixer') // 添加厂商前缀，用于兼容浏览器
  ]
}

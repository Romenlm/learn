const webpack = require('webpack')
/**
 *
 */
const devConfig = {
    mode: 'development', // 打包模式，production 模式压缩打包后的代码。development 表示不压缩
    // 表示映射源码中的代码，能够快速定位到代码报错位置，具体配置可以参考webpack文档devtool配置
    // 对于production使用 cheap-module-source-map,
    // 对于development 使用cheap-module-eval-source-map 即可
    devtool: 'cheap-module-eval-source-map',
    // devtool: 'cheap-module-source-map',

    // 开发环境中不使用css代码分割
    module: {
        rules: [
            {
                test: /\.(css|scss)$/, // 匹配的文件
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader', // 使用第三方css语法样式
                    'postcss-loader'
                ]
            }
        ]
    },
    /**
     * Tree shaking 只支持ES module 即import {add} from './math' 不能使用动态的 require()导入模式
     * 当mode 配置为 development 时，添加 optimization 表示代码中使用导入会根据使用的代码模块打包，没有使用到的模块不打包
     */
    optimization: {
        usedExports: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin() // 解决热更新问题
    ],
    devServer: { // 开发时启动的服务
        contentBase: '../dist',
        open: false, // 表示默认打开浏览器,关闭会提升编译速度
        port: '8099',
        host: '0.0.0.0',
        hot: true, // 表示开启热更新，将整个浏览器刷新页面
    },
    output:{
        filename: 'js/[name].[hash].mini.js',// 使用占位符表示打包出口的文件名和入口文件名相同,打包完成后会出现多个js文件。有几个入口就有几个出口文件
        chunkFilename: 'js/[name].chunk.js', // 表示不在index.html中直接使用，在其他地方隐式引入,并不是入口文件
    }
}

module.exports = devConfig

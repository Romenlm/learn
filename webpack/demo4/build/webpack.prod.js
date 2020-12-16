const {merge} = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin'); // css压缩插件
const commonConfig = require('./webpack.common')
const prodConfig = {
    mode: 'production', // 打包模式，production 模式压缩打包后的代码。development 表示不压缩
    // 表示映射源码中的代码，能够快速定位到代码报错位置，具体配置可以参考webpack文档devtool配置
    // 对于production使用 cheap-module-source-map,
    // 对于development 使用cheap-module-eval-source-map 即可
    // devtool: 'cheap-module-source-map', // 打包后会生成.map文件
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, // 使用插件的loader
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2
                        }
                    }
                ]
            },
            {
                test: /\.css$/, // 匹配的文件
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader', // 使用第三方css语法样式
                    'postcss-loader'
                ]
            }
        ]
    },
    plugins: [
        // css 代码拆分
     new MiniCssExtractPlugin({
      filename: 'css/[name]_[hash].css',
      chunkFilename: '[id].css',
     }),
    ],
    optimization: {
        minimizer: [
            new CssMinimizerPlugin() // css 代码压缩
        ],
    },
    output:{ // 打包时每次都修改文件名字，方便代码更新后用户能看到最新功能，方便浏览器更新代码
        filename: 'js/[name].[contenthash].mini.js',// 使用占位符表示打包出口的文件名和入口文件名相同,打包完成后会出现多个js文件。有几个入口就有几个出口文件
        chunkFilename: 'js/[name].[contenthash].js', // 表示不在index.html中直接使用，在其他地方隐式引入,并不是入口文件
    }
}
module.exports = merge(commonConfig, prodConfig)

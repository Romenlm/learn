const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
const {merge} = require('webpack-merge')
const prodConfig = require('./webpack.prod')
const devConfig = require('./webpack.prod')
const commonConfig = {
    entry: {
        main: './src/index.js'
    },
    module: { // 打包模块
        rules: [ // 规则，以数组形式存在
            {  // es6转换为es5
                test: /\.js$/,
                exclude: /node_modules/, // 表示不用翻译
                loader: "babel-loader"
            },
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
                        limit: 10240 // 图片大于2048不会打包到js中，小于2048图片转换为base64
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ // 使用插件导入html文件模板
            template: 'index.html'// 接收一个html模板文件
        }),

        new CleanWebpackPlugin(), // 打包前删除dist文件,最新版本清除插件不用配置任何参数
        new webpack.ProvidePlugin({ // 表示片面模块，当某一个模块使用了_会自动引入‘lodash’
            _: 'lodash'
        })
    ],
    // 代码自动分割
    optimization: {
        splitChunks: {
            // 表示代码分割，所有的代码都进行分割，遇到公用的类库，如lodash.js就会自动打包成另一个包。表示对异步和同步引入代码都有效，async表示只对异步代码分割，默认设置
            chunks: 'all',
            maxSize: 50000,
        }
    },

    performance: false, // 去除打包后最大文件警告
    output: {
        // publicPath: 'http://Romen.com.cn', // 希望打包后html加载是从服务端加载来的。即公共路径
        //filename: 'bundle.js', // 打包后的文件，如果没有此配置，生成的文件是main.js,

        path: path.resolve(__dirname, '../dist') // 打包后放到哪一个文件夹下，绝对路径,__dirname表示当前路径
    }
}

// env表示全局变量
module.exports = (env) => {
    if (env && env.production) {
        return merge(commonConfig, prodConfig)
    } else {
        return merge(commonConfig, devConfig)
    }
}

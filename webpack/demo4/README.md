### webpack

打包和开发环境分开
#### 添加code splitting代码分割，webpack是自动分割，代码分割部分
```
     // 代码自动分割
        optimization:{
            splitChunks:{
                chunks: 'all' // 表示代码分割，所有的代码都进行分割，遇到公用的类库，如lodash.js就会自动打包成另一个包
            }
        },
```
代码分割与webpack无关
1. 同步代码。只要在webpack.common.js中配置 optimization 即可
2. 异步代码（import引入）： 无需做任何配置，会自动做代码分割


#### 打包分析

```
// 表示对打包过程的描述 --profile --json > stats.json 会生成描述文件stats.json
// 将生成的stats.json文件上传到https://github.com/webpack/analyse中可以对打包过程进行分析
"build": "webpack --profile --json > stats.json --config build/webpack.prod.js",
```


#### 异步代码的编写

当触发事件时再下再代码
```
fun(){
    import('./a.js').then(res=>{
        func()
    })
}
```
当核心代码加载时，网络空闲的时再加载

```
fun(){
    import(/* webpackPrefetch: true*/'./a.js').then(res=>{
        func()
    })
}
```


#### css文件分割
使用MiniCssExtractPlugin插件对css代码分割


#### shimming


### electron 是什么

- Electron 是由 Github开发的开源框架

- 它允许开发者使用Web技术构建跨平台的桌面应用

  ```
  electron = chromium + node.js + Native Api
  ```

### 安装electron 

1. 新建一个文件如： electron-app,使用以下命令初始化项目

   ```
   npm init -y
   ```

2. 使用命令安装

   ```
   npm install electron --save-dev
   ```

3. 使用命令检查版本

   ```
   npx electron -v
   ```

4. 启动命令,如果安装成功会弹出桌面界面

   ```
   ./node_modules/.bin/electron
   ```

### 第一个程序 hello world

1. 在项目下面创建一个文件名为src/app/main.js

```js
const electron = require('electron')

const app = electron.app
// const path = require('path')
const BrowserWindow = electron.BrowserWindow // 引用窗口

let mainWindow = null // 声明打开的主窗口
//
console.log(__dirname)
app.on('ready',()=>{
  mainWindow = new BrowserWindow({width: 1200,height: 700}) // 设置窗口大小
  mainWindow.loadFile('src/view/index.html') // 要使用绝对路径
  //监听关闭事件，把主窗口设置为null
  mainWindow.on('closed',()=>{
    mainWindow = null
  })
})
```

2. 创建一个src/view/index.html文件，写入`hello world`

3. 在package.json文件中修改main为自己创建的文件

   ```
   "main": "src/app/main.js"
   ```

4. 全局安装 electron 

   ```
   npm install electron -g
   ```

5. 使用 `electron .` 命令运行

### electron 运行进程

1. package.json --->主进程文件（mian.js）--->读取页面布局和演示 ---> ipc执行任务和获取信息


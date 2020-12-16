// import "@babel/polyfill" // 翻译es6为es5,在打包入口文件导入
import Head from './head'
import Content from './content'
import image from './images/test.jpg'
import './style/index.css' // 如果不是js文件，需要把index.css文件也写上
import './style/html.scss'
function fun() {
  Head();
  Content();
}

fun();

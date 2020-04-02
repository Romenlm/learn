import Head from './head'
import Content from './content'
import image from './images/test.jpg'
import './style/index.css' // 如果不是js文件，需要把index.css文件也写上
import './style/html.scss'
function fun() {
  Head();
  Content();
  console.log('-----------------')
  console.log(image)
}

fun();

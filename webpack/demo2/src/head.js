export default function head() {
  console.log('head')
  var main = document.getElementById('app')
  var btn = document.createElement('button')
  btn.innerText = '点击按钮'
  main.append(btn)
  btn.onclick = function () {
    var div = document.createElement('div')
    div.innerText = 'item'
    main.append(div)
  }
}

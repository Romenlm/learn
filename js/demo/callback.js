
function fun(name,callback) {
  let color = 'red'
  let str = name+color
  callback(str) // 调用回调函数
}

console.log(1)
fun('car',(res)=>{
  console.log(res)
})
console.log(2)
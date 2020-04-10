/**
 * 类型转换
 */

//---------------转换为字符串-------------------
// let num = 1234
// 方法一，使用String(param)
// console.log(String(num))
// 方法二： 使用字符串拼接
// console.log(num+'789')
// let a = null
// console.log(typeof String(a)) // string

// let f = false
// let ff = f+''
// console.log(typeof ff) // string


//-------------转换为数字类型-------------------

// 方法一: 显示转换

let str = '1234'
console.log(typeof Number(str))

// 方法二： 隐式转换

let num1 = '12',
    num2 = '6'
let num3 = num1/num2
console.log(num3)

let fa = false

console.log(fa/1) // 0
console.log(undefined/1) // NaN
console.log(Number(undefined)) // NaN
console.log('123kk'/1)


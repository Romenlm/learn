/**
 * object.toLocaleString()测试
 **/
/*
let obj = {
    name: '张三'
}

console.log(obj.toLocaleString())*/


// let fun = function () {
//
//     console.log('函数表达式')
//
// }
//
// fun()


// const obj = {
//     name: '张山',
//     age: 20
// }
//
// console.log('name' in obj)
//
// console.log('sex' in obj)
//
// let str = Symbol('id')
//
// console.log(str)

// let num = 1.1
// console.log(Math.floor(num))
//
// let str = 'hello world'
//
// console.log(str.length)
//
// console.log(str.charAt(7))
//
// console.log(str.toUpperCase())
//
// console.log(str.toLowerCase())


// for ... in 循环迭代

// const admin = {
//     eats: true
// }
//
// let rabbit = {
//     jumps: true,
//     __proto__ : admin
// }
//
// for(let key in rabbit){
//     console.log(key)
// }
// 先输出jumps后输出eats

// prototype

// function User(){
//     name: '张三'
// }
// let user = new User()
//
// console.log(user)

let f = new Function('a','console.log(a)')

f(10)


/*
 * @Author: luomenlm
 * @Date: 2021-01-15 09:54:27
 * @LastEditTime: 2021-02-26 17:08:41
 * @LastEditors: Please set LastEditors
 * @Description: 数组的方法测试
 * @FilePath: /learn/js/demo/arrayTest.js
 */

// const arr = [1,2,3,4,5]

// let a = arr.reduce((num,item,index,arrs)=>{
//   console.log('------------')
//   console.log(num)
//   console.log('+++++++')
//   console.log(index)
//   return item
// },10)

// console.log(a)

// 字符串转为数组
// let str = 'luomen'
// // let arr = [...str]
// console.log(Array.from(str))

// 数组迭代

const a = ['h','l','k']
// for (let [indx,value] of a.entries()) {
//   console.log(indx)
//   console.log(value)
//   console.log('============')
// }

let as = a.sort((a1,a2)=>{
  if(a1>a2){
    return 1
  } else if (a1 < a2) {
    return -1
  } else {
    return 0
  }
})

console.log(as)
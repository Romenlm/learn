/*
 * @Author: your name
 * @Date: 2021-02-07 17:02:00
 * @LastEditTime: 2021-02-07 17:03:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuejs/test.js
 */

 let arr = [1,2,3]
 let s = arr.reduce((data,item)=>{
   return data+item
 },20)

 console.log(s)
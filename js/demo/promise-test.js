/*
let p = new Promise((resolve,reject)=>{
  console.log('正在执行')
  let flag = true
  if(flag){
    setTimeout(()=>{
      console.log('执行完成')
      resolve('成功')
    },1000)
  } else {
    reject('失败')
  }
})

p.then(res=>{
  console.log(res)
}).catch(res=>{
  console.log(res)
})*/


/*
let p = new Promise((resole,reject)=>{
  let flag = Math.random()>0.5?true:false
  if(flag){
    console.log('成功')
    resole('执行成功')
  } else {
    console.log('失败')
    reject('执行失败')
  }
})

p.then(res=>{
  console.log(res)
}).catch(err=>{
  console.log(err)
})*/

// let arr = [1,2,3].map(item=>{
//   let p = new Promise((resole,reject)=>{
//     setTimeout(()=>{
//       resole(item)
//     },item*1000)
//   })
//   return p
// })

// Promise.all(arr).then(result=>{
//   console.log(result)
// }).catch(err=>{
//   console.log(err)
// })

/**
 * 链式promise
 */

 const promise = new Promise((resolve,reject)=>{
   resolve(1)
 })
 const promise2 = new Promise((resolve,reject)=>{
  resolve('测试')
})
 promise.then((res)=>{
   console.log('===='+res)
   return res+1
 }).then(res=>{
   console.log('====='+res)
   return res+1
 }).then(res=>{
  console.log('====='+res)
  // return res+1
 }).then(res=>{
   console.log('----------'+res) // undefined,因为上一个链式没有返回数据
 })

promise2.then(res=>{
  console.log(res)
})

// 以上代码结果是1，测试，2，3，undefined
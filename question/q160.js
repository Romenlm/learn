/**
 * 第 160 题：输出以下代码运行结果，为什么？如果希望每隔 1s 输出一个结果，应该如何改造？注意不可改动 square 方法
 */
/**
 const list = [1, 2, 3]
 const square = num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * num)
    }, 1000)
  })
}

 function test() {
  list.forEach(async x=> {
    const res = await square(x)
    console.log(res)
  })
}
 test()

 */

//　解决办法

const list = [1,2,3]

const square = num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * num)
    }, 1000)
  })
}

/**
 * 方法一
 * @returns {Promise<void>}
 */
/*async function test() {
  for(let i=0;i<list.length;i++){
    const res = await square(list[i])
    console.log(res)
  }
}*/

/**
 * 方法二
 * @returns {Promise<void>}
 */
async function test() {
  for(let key of list){
    const res = await square(key)
    console.log(res)
  }
}




test()
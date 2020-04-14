/**
 * 一个promise的简单使用案例
 * promise的使用案例
 * @type {boolean}
 */
let flag = true;
let getClothes = new Promise(function (resolve,reject) {
  if(flag){
    let clothes = {
      color: 'red',
      style: '外套'
    }
    resolve(clothes)
  } else {
    let err = Error('忘记了');
    reject(err)
  }
});

function getFun() {
  getClothes.then((res)=>{
    console.log(res)
  }).catch(err=>{
    console.log(err)
  })
}

getFun();
/**
 * Event Loop的执行顺序
 * 1、首先执行执行栈里的任务
 * 2、执行栈清空后，检查微任务队列，将可执行的微任务全部执行
 * 3、取宏任务（macrotask）队列中的第一项执行
 * 4、回到第二步
 *
 *
 *
 var testFn = function(){
    console.log("promise before"); //同步任务
    //异步宏任务
    setTimeout(function(){
        console.log("异步宏任务");
    },300);
    //异步微任务
    getCloth.then(function(fulfilled){
        console.log(fulfilled);
    }).catch(function(rejected){
        console.log(rejected.message);
    });
    console.log("promise after");//同步任务
}
 testFn()

 ---------------------结果------------------
 promise before
 promise after
 object
 异步宏任务
 */

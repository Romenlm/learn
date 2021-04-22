/*
 * @Author: luomenlm
 * @Date: 2021-02-08 14:29:11
 * @LastEditTime: 2021-02-08 16:56:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vuejs/Observer.js
 */

 /**
  * 数据劫持处理
  */
 class Observer{
   constructor(data){
     this.observer(data)
   }

   /**
    * 劫持数据，将数据传进来并做判断
    * @param {*} data  需要劫持的数据，类型为Object
    */
   observer(data){
     // 判断是否为Object类型
     if(data&&typeof data === 'object'){
       Object.keys(data).forEach(key => {
         this.defineReactive(data,key,data[key])
       });
     }

   }
   /**
    * 监听数据，如果value是一个对象，需要继续监听，此时需要递归监听数据
    * @param {*} data 监听的对象
    * @param {*} key  属性key
    * @param {*} value 属性value
    */
   defineReactive(data,key,value){

    // 当数据是Object类型时，深层次监听数据
    this.observer(value)
    // 创建dep
    let dep = new Dep()
    // 数据劫持
    Object.defineProperty(data,key,{
      enumerable: true,
      configurable: false,
      get(){
        // 订阅数据变化时，往dep中添加观察者
        Dep.target&&dep.addSub(Dep.target)
        return value
      },
      set:(newValue)=>{
        // 如果添加新的值，也需要进行监听
        this.observer(newValue)
        if(newValue !== value){
          value = newValue
        }
        dep.notify()
      }
    })
   }
 }

 /**
  * 依赖收集，作用有两个，一是通知，二是收集观察者
  */
 class Dep{
   constructor(){
     this.subs = []
   }

   /**
    * 添加观察者
    * @param {*} watcher  观察者
    */
   addSub(watcher){
     this.subs.push(watcher)
   }

   /**
    * 通知观察者
    */
   notify(){
     this.subs.forEach(item=>{
       item.update()
     })
   }
 }

 /**
  * 观察者对象
  */
 class Watcher{
   constructor(vm,expr,cb){
     this.vm = vm
     this.expr = expr
     this.cb = cb

    // 获取到老的值
     this.oldValue = this.getOldValue()
   }

   /**
    * 获取到旧的值
    */
   getOldValue(){
     // 获取旧值的时候将watcher挂载到dep上面，方便在劫持的时候使用
     Dep.target = this
     const oldValue = compileUtil.getValue(this.expr, this.vm)
     // 获取到值后将其销毁，否则会导致不断添加观察者
     Dep.target = null
     // 返回旧的值
     return oldValue
   }
   /**
    * 更新
    */
   update(){
     const newValue = compileUtil.getValue(this.expr, this.vm)
     if(this.oldValue !== newValue){
       this.cb(newValue)
     }
   }
 }
/**
 * 函数定义方法,
 */

export class Fun {
  /**
   * 函数声明方法,需要有返回参数，如果没有返回使用void
   */
  run():string{
    return 'hello'
  }

  /**
   * 可选参数,第二个参数为可选参数,可选参数必须配置到参数最后面
   */
  getInfo(name:string,age?:number):void{
    console.log(name+'--------'+age)
  }

  /**
   * 默认参数
   */
  getFun(age:number=20){
    console.log(age)
  }

  /**
   * 剩余参数,剩余参数必须放到参数最后面，使用的是数组接收
   */
  getFuu(a:string,...result:number[]){

  }

  /**
   * 函数的重载
   * 提供多个函数类型定义来实现多种功能的目的
   */
  getSet(name:string):string;
  getSet(age:number):number;
  getSet(str:any):any{
    if(typeof str === 'string'){
      return name
    } else {
      return '我的年龄是'+str
    }
  }


}
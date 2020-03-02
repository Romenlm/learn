/**
 * 1.接口，用于定义规范
 */

/**
 * 属性接口，对json的约束
 */
interface Params {
  name:string;
  sex:string;
  age?:number; // 可选属性，可实现可不实现
}

class ImplParams{
  run(str:Params){
    console.log(str)
  }
}

let implParams = new ImplParams();
implParams.run({name:'luomen',sex:'nan'});// 传入的参数必须和接口的一样


/**
 * 2.函数类型接口，对函数传入的参数和返回值进行约束，括号里面是约束参数，外面是约束返回类型
 */
interface encrypt{
  (key:string,value:string):string
}

/**
 * 定义函数时规定传入参数和返回类型
 * @param key
 * @param value
 */
let md5:encrypt = function (key:string,value:string):string {
  return 'ooooooooo'
}

/**
 * 3. 可索引接口，数组对象的约束（不常用）
 */
interface UserArr {
  [index:number]:string

}

let arr:UserArr = ['qqq','sss'];
console.log(arr);
// 对象约束(不常用)
interface UserObj {
  [index:string]:string
}
let user:UserObj = {name:'张三'};

/**
 * 类类型接口，对类的约束
 */
interface Animal {
  name:string;
  eat():string;

}
class Dog implements Animal{
  name: string='张三';

  eat(): string {
    let value = this.name;
    return value;
  }

}

/**
 * 接口的扩展，接口继承接口
 */
interface A {
  name:string;
  eat(value:string):string;
}
interface B extends A{
  work():string;
}
class C implements B{
  name: string = '张三';

  eat(value: string): string {
    return "";
  }

  work(): string {
    return "";
  }

}
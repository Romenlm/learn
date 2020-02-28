/**
 * 接口，用于定义规范
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
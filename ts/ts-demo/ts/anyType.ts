/**
 * 任意类型(any),任意值（Any）用来表示允许赋值为任意类型。如果是一个普通类型，在赋值过程中改变类型是不被允许的,但如果是 any 类型，则允许被赋值为任意类型。
 * */

export class AnyType {
  anyTest(){
    let flag:any = true;
    console.log('----------任意类型-----------');
    console.log('----------赋值为boolean-----------');
    console.log(flag)
    // 允许访问属性的任意方法和属性

    let str:any = 'hello';
    console.log(str.slice(-2));

    // 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型
    let ss = 1234; // 等价于 let ss:any = 1234
    console.log(ss);
  }
}

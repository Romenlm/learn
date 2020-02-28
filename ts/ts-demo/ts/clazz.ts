/**
 * 类和静态函数
 * 定义类
 *
 */
export class Clazz {
  name:string; // 定义属性
  constructor(name:string) { // 构造函数
   this.name = name
  }
  run():void{
   console.log(this.name)
  }
 }

 /**
  * 继承，extends和super两个关键字
  */
 class Person {
   name: string;
   constructor(name:string) {
     this.name = name
   }
   run():string{
     return this.name+'在运动'
   }
 }

/**
 * 继承，要继承父的构造函数，使用super
 */
export class Web extends Person{
  age:number;
  constructor(name:string,age:number) {
    super(name); // 必须在构造函数第一行
    this.age = age // 子类的新属性
  }
  getAge():void{
    console.log(this.age)
  }
 }

/**
 * 修饰符，定义属性的时候提供三种修饰符，
 * public: 公有，子类和类外面都可以访问
 * protected： 保护类 类里面，子类可以访问
 * private ： 私有，类里面可以访问，子类和类外面不可以访问
 */
class Webs {
  public name:string;
  private ageL:number;
  protected gender:string

 }
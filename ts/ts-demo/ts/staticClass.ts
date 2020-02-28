/**
 * 静态属性，静态方法，抽象类，多态
 */
class StaticClass {
  static sex:string = '男';
  /**
   * 静态方法，静态方法中不能直接调用类中的属性。只能调用静态属性
   */
  public static run():string{
    let na = StaticClass.sex;
    return 'hello'
  }

  /**
   * 实例方法，需要实例化之后才能调用
   */
  public show():void{
    console.log('实例方法')
  }

}

// 调用静态方法，使用类名直接调用
console.log(StaticClass.run());

/**
 * 抽象类，抽象方法
 * 抽象类不能直接被实例化，使用abstract关键字定义，可以包含非抽象方法
 * 抽象方法中不包含具体实现并且必须在派生类中实现
 * 抽象方法只能放到抽象类中
 */
abstract class Person {
  /**
   * 抽象方法
   */
  public abstract run(): string;
}

/**
 * 继承类中必须实现抽象方法
 */
export class Child extends Person{
  run(): string {
    return 'hello'
  }
}

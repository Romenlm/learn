
// 泛型

/**
 * 泛型就是解决，类，接口，方法的复用性，以及对特定类型的支持,
 * 可以支持不特定的数据类型，传入的参数和返回的类型一致

 */

/**
 * T表示泛型，具体什么类型调用这个方法的时候决定。函数上的三个T必须是同一个字母，
 * @param valeu
 */
function getData<T>(valeu:T):T {
  return value

}

/**
 * 泛型使用，传入的是number，返回的也是number
 */
getData<number>(1234);


/**
 * 返回任意类型,但是要规定好传入的参数
 * @param valeu
 */
function getData1<T>(valeu:T):any {
  return '1234'

}

getData1<string>('hello');


// 泛型类
class MinClass<T> {
  public list:T;
  add(num:T):any{
    return num
  }
}

// 创建泛型类的对象
let min = new MinClass<String>();

/**
 * 泛型接口,传入一格参数
 */
/**
 * 方法一
 */
interface Config {
  <T>(value:T):T

}


/**
 * 方法二
 */
interface Config2<T> {
  (value:T):T

}
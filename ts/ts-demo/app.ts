
import {PrimitiveType} from './ts/primitiveType';
import {AnyType} from './ts/anyType'
import {Fun} from './ts/fun'
import {Clazz,Web} from './ts/clazz'
import {Child} from './ts/staticClass'
let type = new PrimitiveType();
type.booleanTest();
type.numberTest();
type.stringTest();
type.voidTest();
type.nullAndUndefined();

let anyType = new AnyType();
anyType.anyTest();

/**
 * 函数定义
 */
let fun = new Fun();
console.log(fun.getSet(20));

/**
 * 类的定义
 */

let clazz = new Clazz('张三');
clazz.run();

let web = new Web('李四',20);
console.log(web.run());
web.getAge();

/**
 * 抽象类
 */
let chile = new Child();
console.log(chile.run());
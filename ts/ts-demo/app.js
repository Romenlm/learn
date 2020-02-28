"use strict";
exports.__esModule = true;
var primitiveType_1 = require("./ts/primitiveType");
var anyType_1 = require("./ts/anyType");
var fun_1 = require("./ts/fun");
var clazz_1 = require("./ts/clazz");
var staticClass_1 = require("./ts/staticClass");
var type = new primitiveType_1.PrimitiveType();
type.booleanTest();
type.numberTest();
type.stringTest();
type.voidTest();
type.nullAndUndefined();
var anyType = new anyType_1.AnyType();
anyType.anyTest();
/**
 * 函数定义
 */
var fun = new fun_1.Fun();
console.log(fun.getSet(20));
/**
 * 类的定义
 */
var clazz = new clazz_1.Clazz('张三');
clazz.run();
var web = new clazz_1.Web('李四', 20);
console.log(web.run());
web.getAge();
/**
 * 抽象类
 */
var chile = new staticClass_1.Child();
console.log(chile.run());

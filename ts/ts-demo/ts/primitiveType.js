"use strict";
/**
 * 原始数据类型
 * 布尔值（boolean）,数值（number）,字符串（string），null,undefined和Symbol
 * */
exports.__esModule = true;
var PrimitiveType = /** @class */ (function () {
    function PrimitiveType() {
    }
    /**
     * Boolean类型的定义,只有true和false两个值
     */
    PrimitiveType.prototype.booleanTest = function () {
        var isBoolean = true;
        console.log('-----------------boolean类型-----------------');
        console.log(isBoolean);
        var flag = new Boolean();
        console.log(flag); // [Boolean: false]
    };
    /**
     * 定义数值类型
     */
    PrimitiveType.prototype.numberTest = function () {
        var num = 123;
        console.log('-----------------number类型-----------------');
        console.log(num);
    };
    /**
     * 字符串类型
     */
    PrimitiveType.prototype.stringTest = function () {
        var str = 'hello world';
        console.log('-----------------string类型-----------------');
        console.log(str);
    };
    /**
     * 空值,定义在函数上面，表示不返回任何类型的数据
     */
    PrimitiveType.prototype.voidTest = function () {
        console.log('-----------------空值-----------------');
        console.log('返回的是空值，即不返回任何值');
        // 声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null
        var vo = undefined;
        console.log(vo);
    };
    /**
     * null和undefined类型
     */
    PrimitiveType.prototype.nullAndUndefined = function () {
        // 在 TypeScript 中，可以使用 null 和 undefined 来定义这两个原始数据类型：
        var u = undefined;
        var n = null;
        // 与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量,而void类型变量不能赋值给number类型
        var num = u;
        console.log('-----------------null和undefined类型-----------------');
        console.log(num);
        // let vo:void = null
        // let nn:number = vo 报错提示
        // console.log(nn)
    };
    return PrimitiveType;
}());
exports.PrimitiveType = PrimitiveType;

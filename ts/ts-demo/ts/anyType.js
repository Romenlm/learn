"use strict";
/**
 * 任意类型(any),任意值（Any）用来表示允许赋值为任意类型。如果是一个普通类型，在赋值过程中改变类型是不被允许的,但如果是 any 类型，则允许被赋值为任意类型。
 * */
exports.__esModule = true;
var AnyType = /** @class */ (function () {
    function AnyType() {
    }
    AnyType.prototype.anyTest = function () {
        var flag = true;
        console.log('----------任意类型-----------');
        console.log('----------赋值为boolean-----------');
        console.log(flag);
        // 允许访问属性的任意方法和属性
        var str = 'hello';
        console.log(str.slice(-2));
        // 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型
        var ss = 1234; // 等价于 let ss:any = 1234
        console.log(ss);
    };
    return AnyType;
}());
exports.AnyType = AnyType;

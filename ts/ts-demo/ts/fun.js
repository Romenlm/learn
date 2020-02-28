"use strict";
/**
 * 函数定义方法,
 */
exports.__esModule = true;
var Fun = /** @class */ (function () {
    function Fun() {
    }
    /**
     * 函数声明方法,需要有返回参数，如果没有返回使用void
     */
    Fun.prototype.run = function () {
        return 'hello';
    };
    /**
     * 可选参数,第二个参数为可选参数,可选参数必须配置到参数最后面
     */
    Fun.prototype.getInfo = function (name, age) {
        console.log(name + '--------' + age);
    };
    /**
     * 默认参数
     */
    Fun.prototype.getFun = function (age) {
        if (age === void 0) { age = 20; }
        console.log(age);
    };
    /**
     * 剩余参数,剩余参数必须放到参数最后面，使用的是数组接收
     */
    Fun.prototype.getFuu = function (a) {
        var result = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            result[_i - 1] = arguments[_i];
        }
    };
    Fun.prototype.getSet = function (str) {
        if (typeof str === 'string') {
            return name;
        }
        else {
            return '我的年龄是' + str;
        }
    };
    return Fun;
}());
exports.Fun = Fun;

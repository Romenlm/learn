"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
/**
 * 静态属性，静态方法，抽象类，多态
 */
var StaticClass = /** @class */ (function () {
    function StaticClass() {
    }
    /**
     * 静态方法，静态方法中不能直接调用类中的属性。只能调用静态属性
     */
    StaticClass.run = function () {
        var na = StaticClass.sex;
        return 'hello';
    };
    /**
     * 实例方法，需要实例化之后才能调用
     */
    StaticClass.prototype.show = function () {
        console.log('实例方法');
    };
    StaticClass.sex = '男';
    return StaticClass;
}());
// 调用静态方法，使用类名直接调用
console.log(StaticClass.run());
/**
 * 抽象类，抽象方法
 * 抽象类不能直接被实例化，使用abstract关键字定义，可以包含非抽象方法
 * 抽象方法中不包含具体实现并且必须在派生类中实现
 * 抽象方法只能放到抽象类中
 */
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
/**
 * 继承类中必须实现抽象方法
 */
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.run = function () {
        return 'hello';
    };
    return Child;
}(Person));
exports.Child = Child;

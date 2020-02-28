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
 * 类和静态函数
 * 定义类
 *
 */
var Clazz = /** @class */ (function () {
    function Clazz(name) {
        this.name = name;
    }
    Clazz.prototype.run = function () {
        console.log(this.name);
    };
    return Clazz;
}());
exports.Clazz = Clazz;
/**
 * 继承，extends和super两个关键字
 */
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.run = function () {
        return this.name + '在运动';
    };
    return Person;
}());
/**
 * 继承，要继承父的构造函数，使用super
 */
var Web = /** @class */ (function (_super) {
    __extends(Web, _super);
    function Web(name, age) {
        var _this = _super.call(this, name) || this;
        _this.age = age; // 子类的新属性
        return _this;
    }
    Web.prototype.getAge = function () {
        console.log(this.age);
    };
    return Web;
}(Person));
exports.Web = Web;
/**
 * 修饰符，定义属性的时候提供三种修饰符，
 * public: 公有，子类和类外面都可以访问
 * protected： 保护类 类里面，子类可以访问
 * private ： 私有，类里面可以访问，子类和类外面不可以访问
 */
var Webs = /** @class */ (function () {
    function Webs() {
    }
    return Webs;
}());

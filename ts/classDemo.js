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
// ts 1、类的定义
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.print = function () {
        return this.name + ":" + this.age;
    };
    Person.prototype.test = function () {
        console.log('调用父类实例方法');
    };
    return Person;
}());
exports["default"] = Person;
var p = new Person('zhangsan', 20);
// console.log(p.print())
// 2、类的继承
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(cardNumber, school) {
        var _this = _super.call(this, 'lisi', 13) || this;
        _super.prototype.test.call(_this);
        _this.cardNumber = cardNumber;
        _this.school = school;
        return _this;
    }
    Student.prototype.dohomework = function () {
        return this.name + "\u4ECA\u5E74" + this.age + "\u5C31\u8BFB\u4E8E" + this.school + "\u5B66\u53F7" + this.cardNumber;
    };
    return Student;
}(Person));
var stu1 = new Student('123', '北京大学');
console.log(stu1.dohomework());
/**
 * 类可以实现（implement）接口。通过接口，你可以强制地指明类遵守某个契约。
 * 你可以在接口中声明一个方法，然后要求类去具体实现它。
 */
var HPPrinter = /** @class */ (function () {
    function HPPrinter() {
    }
    HPPrinter.prototype.printing = function () {
        console.log('打印成功！');
    };
    HPPrinter.prototype.getmsg = function () {
        console.log('hp10011');
    };
    // 可以多写但是不可以少写
    HPPrinter.prototype.test = function () {
        console.log('test');
    };
    return HPPrinter;
}());
var hp = new HPPrinter();
hp.printing();
hp.getmsg();
hp.test();

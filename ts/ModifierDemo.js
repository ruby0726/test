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
var classDemo_1 = require("./classDemo");
// 3、修饰符
// public / private / protected
var Person1 = /** @class */ (function () {
    function Person1(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    Person1.prototype.print = function () {
        return this.name + ":" + this.age;
    };
    return Person1;
}());
var p = new Person1('zhangsan', 20, '1111@qq.com');
console.log(p.name);
// console.log(p.age)
// console.log(p.email)
var student = /** @class */ (function (_super) {
    __extends(student, _super);
    function student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    student.prototype.show = function () {
        console.log(this.name, this.email);
    };
    return student;
}(Person1));
var classDemo1 = new classDemo_1["default"]('zhangsan', 20);
console.log(classDemo1.print());

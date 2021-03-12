//抽象类/抽象方法
// 1、抽象类是提供其他类继承的基类（父类），不能直接被实例
// 2、抽象方法只能包含在抽象类中，抽象类中可以包含抽象方法和非抽象方法
// 3、子类继承抽象类，实现抽象方法
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
//定义
var Animal1 = /** @class */ (function () {
    function Animal1(name) {
        this.name = name;
    }
    Animal1.prototype.run = function () {
        console.log('123');
        console.log(this.name);
    };
    return Animal1;
}());
var Cat1 = /** @class */ (function (_super) {
    __extends(Cat1, _super);
    function Cat1() {
        return _super.call(this, 'Cat run') || this;
    }
    Cat1.prototype.eat = function () {
        console.log('猫吃鱼');
    };
    return Cat1;
}(Animal1));
var Dog1 = /** @class */ (function (_super) {
    __extends(Dog1, _super);
    function Dog1() {
        return _super.call(this, 'Dog run') || this;
    }
    Dog1.prototype.eat = function () {
        console.log('狗吃肉');
    };
    return Dog1;
}(Animal1));
var cat1 = new Cat1();
cat1.eat();
cat1.run();
// abstract class Department {
//   constructor(public name: string) {
//   }
//   printName(): void {
//     console.log('Department name: ' + this.name+'111');
//   }
//   abstract printMeeting(): void; // 必须在派生类中实现
// }
// class AccountingDepartment extends Department {
//   constructor() {
//     super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
//   }
//   printMeeting(): void {
//     console.log('The Accounting Department meets each Monday at 10am.');
//   }
//   generateReports(): void {
//     console.log('Generating accounting reports...');
//   }
// }
// let department: Department; // 允许创建一个对抽象类型的引用
// // department = new Department(); // 错误: 不能创建一个抽象类的实例
// department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
// department.printName();
// department.printMeeting();
// // department.generateReports(); // 错误: 方法在声明的抽象类中不存在

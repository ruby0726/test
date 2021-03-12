//抽象类/抽象方法
// 1、抽象类是提供其他类继承的基类（父类），不能直接被实例
// 2、抽象方法只能包含在抽象类中，抽象类中可以包含抽象方法和非抽象方法
// 3、子类继承抽象类，实现抽象方法

//定义
abstract class Animal1{
  name: string;
  constructor(name:string) {
    this.name = name;
  }
  abstract eat():void;
  run(): void {
    console.log('123');
    console.log(this.name);
  }
}
class Cat1 extends Animal1{
  constructor() {
    super('Cat run')
  }
  eat() {
    console.log('猫吃鱼')
  }
}
class Dog1 extends Animal1{
  constructor() {
    super('Dog run')
  }
  eat() {
    console.log('狗吃肉')
  }
}
var cat1 = new Cat1();
cat1.eat()
cat1.run()


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
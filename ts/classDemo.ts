// ts 1、类的定义
export default class Person{
  name: string;
  age: number;
  constructor(name: string,age: number) {
    this.name = name;
    this.age = age;
  }
  print() {
    return this.name + ":" +this.age
  }
  test():void {
    console.log('调用父类实例方法')
  }
}
var p = new Person('zhangsan', 20)
console.log(p.print())

// 2、类的继承
class Student extends Person{
  cardNumber: string;
  school: string;
  constructor(cardNumber: string, school: string) {
    super('lisi', 13);
    super.test()
    this.cardNumber = cardNumber;
    this.school = school;
  }
  dohomework() {
    this.test()
    return `${this.name}今年${this.age}就读于${this.school}学号${this.cardNumber}`
  }
}
let stu1 = new Student('123', '北京大学')
console.log(stu1.dohomework())

// 3、接口的继承
//接口中不能包含具体实现，接口只在编译时起作用
interface Priter{
  getmsg();
}
interface ColorPriter extends Priter {
  printing();
}
/**
 * 类可以实现（implement）接口。通过接口，你可以强制地指明类遵守某个契约。
 * 你可以在接口中声明一个方法，然后要求类去具体实现它。
 */
class HPPrinter implements ColorPriter{
  printing() {
    console.log('打印成功！')
  }
  getmsg() {
    console.log('hp10011')
  }
  // 可以多写但是不可以少写
  test() {
    console.log('test')
  }
}
let hp = new HPPrinter()
hp.printing()
hp.getmsg()
hp.test()

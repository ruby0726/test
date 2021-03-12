// import classDemo from './classDemo'

// 3、修饰符
// public / private / protected
class Person{
  public name: string;
  private age: number;  //私有属性，只能在Person中访问
  protected email: string; // 受保护属性，只能在Person类及其子类中访问
  constructor(name: string, age: number,email:string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
  print() {
    return this.name + ":" + this.age;
  }
}
var p = new Person('zhangsan', 20,'1111@qq.com')
console.log(p.name)
// console.log(p.age)
// console.log(p.email)

class student extends Person{
  show() {
    console.log(this.name, this.email)
  }
}

// let classDemo1 = new classDemo('zhangsan', 20)
// console.log(classDemo1.print())


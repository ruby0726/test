//静态属性和静态方法
class Person2 {
  // 实例属性
  name: string;
  static age: number;   // 静态属性
  email: string; 
  constructor(name: string, age: number, email: string) {
    this.name = name;
    Person2.age = age;
    this.email = email;
  }
  // 实例方法
  print() {
    return this.name + ":";
  }
  //静态方法
  static show() {
    console.log(Person2.age)
    console.log('show fac')
  }
}

var p2 = new Person2('zhangsan', 22, 'sss@qq.com')
console.log(p2.print()) // 调用实例方法
Person2.show() // 调用静态方法


// 当方法内与实例属性没什么关系的时候可以选择用静态方法

//静态方法调用不了实例化方法和实例化属性，因为静态域加载是在解析阶段，而实例化是在初始化阶段，（java原理），所以静态方法里面不能调用本类的方法和属性，可以调用静态属性和静态方法

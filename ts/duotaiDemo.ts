// 多态 ---重写方法
//父类定义一个方法不去实现，让继承它的子类去实现，每个子类的该方法有不同的表现
class Animal {
  eat() {
    console.log('animal eat')
  }
}

class Cat extends Animal{
  eat() {
     console.log('猫吃鱼')
   }
}
 
class Dog extends Animal {
  eat() {
    console.log('狗吃肉')
  }
}

var cat1 = new Cat()
cat1.eat()
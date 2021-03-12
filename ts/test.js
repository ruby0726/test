//静态属性和静态方法
function Person1() {
  // 实例属性
  this.name = 'zhangsan'
  // 实例方法
  this.print = function () {
    console.log('我是实例方法')
  }
}
// 静态属性
Person1.age = 19;
// 静态方法
Person1.print1 = function () { 
  console.log('我是静态方法')
};
// 调用静态方法
Person1.print1()
console.log(Person1.age)

//调用实例方法
var p1 = new Person1()
p1.print() 
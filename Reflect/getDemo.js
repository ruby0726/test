// Reflect.get(target,name,receiver)

var myObject = {
  foo: 1,
  bar: 2,
  get baz() {
    return this.foo + this.bar
  }
}
Reflect.get(myObject, 'foo')  //1
Reflect.get(myObject, 'bar') //2
console.log(Reflect.get(myObject, 'baz'))

// 如果name属性属性部署了读取函数（getter）,则读取函数的this指向receiver
var myReceiverObject = {
  foo: 4,
  bar: 4
}
console.log(Reflect.get(myObject, 'baz', myReceiverObject))

// 如果第一个参数不是对象，Reflect.get方法会报错
// console.log(Reflect.get(1, 'foo'))  //Reflect.get called on non-object


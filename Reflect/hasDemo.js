// Reflect.has(obj,name)
// Reflect.has方法对应name in obj 里面的in运算符

var myObject = {
  foo: 1
};
// 旧写法
// console.log('foo' in myObject)

// 新写法
console.log(Reflect.has(myObject, 'foo'))

//如果Reflect.has()方法的第一个参数不是对象，会报错

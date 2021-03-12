// Reflect.deleteProperty(obj,name)

const myObj = { foo: 'bar' }

// 旧写法
// delete myObj.foo
// console.log(myObj)

// 新写法
Reflect.deleteProperty(myObj, 'foo')
console.log(myObj)

//该方法返回一个布尔值。如果删除成功，或者被删除的属性不存在，返回true;删除失败，被删除的属性依然存在，返回false
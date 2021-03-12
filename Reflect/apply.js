
var myObject = {};
Object.defineProperty(myObject, 'hidden', {
  value: true,
  enumerable: false,
});

// 旧写法
var theDescriptor = Object.getOwnPropertyDescriptor(myObject, 'hidden');
console.log(theDescriptor)

// 新写法
var theDescriptor = Reflect.getOwnPropertyDescriptor(myObject, 'hidden');
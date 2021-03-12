// 1、Reflect.getPrototypeOf(obj)

//Reflect.getPrototypeOf(obj)
// Reflect.getPrototypeOf方法用于读取对象的_proto_属性，对应Object.egtPrototypeOf(obj)

const myObj = new FancyThing();
// 旧写法
Object.getPrototypeOf(myObj) === FancyThing.prototype 

// 新写法
Reflect.getPrototypeOf(myObj) === FancyThing.prototype 

// 区别：如果参数不是对象，Object.getPrototypeOf会将这个参数转为对象，然后再运行，而Reflect.getPrototypeOf会报错

// 2、Reflect.setPrototypeOf(obj,newProto)
// Reflect.setPrototypeOf用衣服设置目标对象的原型(protorype)

const myObj = {};

// 旧写法
Object.setPrototypeOf(myObj, Array.prototype); //设置为数组类型

// 新写法
Reflect.setPrototypeOf(myObj, Array.prototype);

myObj.length // 0

// 如果无法设置目标对象的原型（比如：目标对象禁止扩展）
// Object.setPrototypeOf会返回false
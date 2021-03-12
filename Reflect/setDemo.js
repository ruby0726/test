// Reflect.set(target,name,value,receiver)
// Reflect.set方法设置target对象的name属性等于value

var myObject = {
  foo: 1,
  set bar(value) {
    //  与这段内容无关  ，不写都行
    // return this.foo = value
  }
}

console.log(myObject.foo)  // 1

// Reflect.set(myObject, 'foo', 2);
// console.log(myObject.foo)

// Reflect.set(myObject, 'foo', 3);
// console.log(myObject.foo)

// 如果name属性设置了赋值函数，则赋值函数的this绑定receiver
var myReceiverObject = {
  foo:0
}
console.log(Reflect.set(myObject, 'foo', 3, myReceiverObject));  // true
console.log(myObject.foo);  //1
console.log(myReceiverObject.foo);  //3

//注意：如果proxy对象和Reflect对象联合使用，前者拦截赋值操作，后者完成赋值的默认行为，而且传入了receiver,
// 那么Reflect.set会触发Proxy.defineProperty拦截
let p = {
  a: 'a'
};
let handler = {
  set(target, key, value, receiver) {
    console.log('set')
    Reflect.set(target, key, value, receiver)
  },
  defineProperty(target, key, attribute) {
    console.log('defineProperty')
    Reflect.defineProperty(target, key, attribute)
  }
}
let obj = new Proxy(p, handler);
obj.a = 'A'
// set
// defineProperty

// 如果Reflect.set没有传入receiver，那么就不会触发defineProperty
// 触发Proxy.defineProperty拦截的原因是：这是因为proxy.set的receiver参数总是指向当前proxy实例，而Reflect.set一旦传入receiver,就会将属性赋值到receiver上面。导致触发defineProperty

// Reflect.set(1,'foo',{}) // 报错


// 写出执行结果并解释原因

// 刚开始：   emmm...答错了
function f() { }
const a = f.prototype, //a是构造函数f的原型 ： {constructor: ƒ}
  b = Object.getPrototypeOf(f)  //  b是实例f的原型对象 ： ƒ () { [native code] }
console.log(a===b) //false
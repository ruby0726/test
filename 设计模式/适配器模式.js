// 适配器模式
// 当有一个对象的，他的一些api,参数，不方便列外一个方法调用
// 有两个对象，api,参数不满足，可以通过一个中介的适配器来转化结构

// function dog() {

// }
// dog.prototype.shout = function () {
  
// }
// dog.prototype.run = function () {
  
// }
// function bird() {

// }
// bird.prototype.shot = function () {
  
// }
// bird.prototype.fly = function () {
  
// }
// // 适配器
// function dogAdapter(dogob) {
//   this.dogob = dogob
// }
// dogAdapter.prototype = new bird()
// dogAdapter.prototype.fly 


function a(ob) {
  // 参数适配器  让未知的参数变得安全
  var _adapter = {
    a: 1,
    b: 2,
    c: 3
  }
  for (var i in _adapter) {
    _adapter[i] = ob[i] || _adapter[i]
  }
  console.log(_adapter)  // { a: 1, b: 3, c: 3 }
}
a({ a: 1, b: 3 })

// 数据适配器

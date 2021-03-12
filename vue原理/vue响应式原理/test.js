function vue() {
  this.$data = { a: 1 }
  this.el = document.getElementById('app')
  this.virtualdom = ""
  this.observer(this.$data)
  this.render()
}
// 注册get 和set
vue.prototype.observer = function (obj) {
  var value;
  var self = this;
  for (var key in obj) {
    value = obj[key];
    if (typeof value === 'object') {
      this.observer(value)
    } else {
      Object.defineProperty(this.$data, key, {
        get: function () {
          // 进行依赖收集
          return value
        },
        set: function (newValue) {
          value = newValue;
          self.render();
        }
      })
    }
  }
}
vue.prototype.render = function () {
  this.virtualdom = 'i am' + this.$data.a
  this.el.innerHTML = this.virtualdom;
}

// 视图怎么监听数组的改变呢？
//其实就是做了一个装饰者模式  重写了数组的一些方法，通知订阅者，从而实现了响应式
var arraypro = Array.prototype;//push,pop
var arrob = Object.create(arraypro)  //复制一份
var arr = ['push', 'pop', 'shift'];
arr.forEach(function (method, index) {
  arrob[method] = function () {
    var ret= arraypro[method].apply(this, arguments);
    departFocus.notify();
  }
})

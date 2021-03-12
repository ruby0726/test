// commonjs模块输出的是值的拷贝,也就是说，一旦输出一个值，模块内的变化就影响不到这个值

// 除非写成一个函数才能得到内部变化后的值
var counter = 3;
function incCounter() {
  counter++;
}
module.exports = {
  // 取值器函数     这样外部就可以监听到couter的变动了
  get counter() {
    return counter
  },
  incCounter
}

'use strict';
{
  function test() { }
  test = 123
  console.log(test)
}
console.log(test)

// 1、块会限制函数提升   不是严格模式的话只有function和var可以提升出去
// 2、严格模式到底哪里严格了
// 3、函数和变量提升这里非常清楚


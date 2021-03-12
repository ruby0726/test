// 1、函数的定义
// 2、参数（可选参数/默认参数/剩余参数）
// 3、方法的重载

// 函数声明

//js
// function add(x, y) {
//   return x + y;
// }

// let add1 = function (x,y) {
//   return x + y;
// }

//ts
//1、函数声明
function add(x: number, y: number):number {
  return x + y;
}
// 2、函数表达式
let add1 = function (x,y):number {
  return x + y;
}
// 可选参数 ？   可选参数放后面
function show(name, age?:number): void{
  console.log(name,age)
}
show('zhangsan')

// 默认参数
function show2(name, age: number = 20): void {
  console.log(name, age)
}
show2('zhangsan', 10)

// 剩余参数
function add2(x1, x2, ...x: number[]): number{
  var sum = 0;
  for (var i = 0; i < x.length; i++){
    sum+=x[i]
  }
  return x1+x2+sum
}
var sum = add2(1, 2, 3, 4, 5, 6, 7, 8)
console.log(sum)

// 函数重载
function getInfo(name: string): void;
function getInfo(age: number): void;
function getInfo(str: any): void { 
  if (typeof str === 'string') {
    console.log('名字：',str)
  }
  if (typeof str === 'number') {
    console.log('年龄：', str)
  }
};
getInfo(18)

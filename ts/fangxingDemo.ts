// 1、泛型函数
// 2、泛型类
// 3、泛型接口

// 泛：

// function prnitarr(arr: number[]): void{
//   // for / for in /for of
//   for (var i = 0; i < arr.length; i++){
//     console.log(i) // 索引值
//     console.log(arr[i]) // 具体的元素
//   }
//   for (var item of arr) {
//     console.log(item) // for of 得到具体的元素
//   }
//   for (var indx in arr) {
//     console.log(indx) // for in  得到索引值
//   }
// }
// prnitarr([11,22,33,44])

// 1、泛型函数
// function prnitarr<T>(arr: T[]): void {
//   for (var item of arr) {
//     console.log(item) // for of 得到具体的元素
//   }
// }
// prnitarr<number>([11, 22, 33])
// prnitarr<string>(['11', '22', '33'])

// 2、泛型类
// class myArrayList<T>{
//   public name:T;
//   public list: T[] = [];
//   add(val: T): void{
//     this.list.push(val)
//   }
// }
// var arr = new myArrayList<number>()
// arr.add(11);
// arr.add(22);
// console.log(arr.list)

//3、泛型接口
interface GenericIdentityFn<T>{
  (arg:T):T;
}
function identity<T>(arg: T): T{
  return arg;
}
let myIdentiry: GenericIdentityFn<number> = identity

// 泛型约束
interface Lengthwise{
  length:number
}
function loggingIdentity<T extends Lengthwise>(arg: T): T{
  console.log(arg.length); 
  return arg;
}

// loggingIdentity(3);
loggingIdentity('3');

// 在泛型约束中使用类型参数
function getProperty<T, K extends keyof T>(obj:T,key:K):T[K] {
  return obj[key];
}
let x = { a: 1, b: 2, c: 3, d: 4 }
getProperty(x, 'a')
// getProperty(x, 'm')
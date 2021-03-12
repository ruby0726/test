// 在泛型约束中使用类型参数

//有时，我们想让参数的类型是某个对象的属性时，可以这样写

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}

let obj = { a: 1, b: 2, c: 3 }
getProperty(obj, 'a') // true
// getProperty(obj, 't')
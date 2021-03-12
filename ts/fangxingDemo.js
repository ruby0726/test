// 1、泛型函数
// 2、泛型类
// 3、泛型接口
function identity(arg) {
    return arg;
}
var myIdentiry = identity;
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
// loggingIdentity(3);
loggingIdentity('3');
// 在泛型约束中使用类型参数
function getProperty(obj, key) {
    return obj[key];
}
var x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, 'a');
getProperty(x, 'm');

// switch 是严格比较, String 实例和 字符串不一样.
var str1 = 'str';
var str2 = new String('str');
console.log(typeof str1); // "string"

console.log(str2); //String {"str"}    0: "s"1: "t"2: "r"length: 3__proto__: String[[PrimitiveValue]]: "str"
console.log(str2.str);  // undefined

console.log(typeof str2); //"object"
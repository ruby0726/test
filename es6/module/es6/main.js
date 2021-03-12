// JS引擎对脚本静态分析的时候，遇到模块加载命令import,就会生成一个只读引用。等到脚本真正执行时，再根据这个只读引用，到被加载的哪个模块中去取值
//ES6模块是动态引用，并且不会缓存值，模块里面的变量绑定其所在的模块
import { foo } from './m2.js';
console.log(foo);
setTimeout(() => console.log(foo), 500);
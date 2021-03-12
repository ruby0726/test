/**Object.defineProperty  （vue2.0的响应式实现原理）
其实并不是核心的为一个对象做事数据双向绑定，而是去给对象做属性标签，只不过属性里的get和set实现了响应式 */
var ob = {
  a: 1,
  b:2
}

var _value = ob.a;
Object.defineProperty(ob, 'a', {
  // 取值时调用  拿到的是return出来的值
  get: function(){
    console.log('a is be get');
    return _value
  },
  // 设置值时调用
  set: function(newValue){
    console.log('a is be set');
    _value=newValue;
    return _value
  }
});
console.log(Object.getOwnPropertyDescriptor(ob, 'a'));
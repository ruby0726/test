function vue() {
  this.$data = { a: 1 }
  this.el = document.getElementById('app')
  this.virtualdom = ""
  this.observer(this.$data)
  this.render()
}
// 注册get 和set
vue.prototype.observer = function (obj) {
  var self = this;
  this.$data = new Proxy(this.$data, {
    get: function (target,key) {
      return target[key]
    },
    set: function (target, key, newValue) {
      target[key] = newValue
      self.render()
    }
  })
}
vue.prototype.render = function () {
  this.virtualdom = 'i am' + this.$data.a
  this.el.innerHTML = this.virtualdom;
}

var ob = {
  a: 1,
  b:2
}
// 相对于definePropety的写法优点：1、不需要循环了；2、不需要使用外部全局变量了
new Proxy(ob, {
  //不会污染源对象  （最好不要污染元对象，非常重要的点!）
  get(target,key,receiver){
    console.log(target, key, receiver)
    return target[key]
  },
  set(target, key, value, receiver) {
    return Reflect.set(target,key,value)
    // return target[key] = value;
  }
})

//proxy的实际应用
//类型校验：

//策略模式
var validtor = {
  name: function (value) {
    var reg = /^[\u4E00-\u9FA5]+$/
    if (typeof value == 'string' && reg.test(value)) {
      return true
    }
    return false
  },
  age: function (value) {
    if (typeof value == 'number' && value>=18) {
      return true
    }
    return false
  }
}
function person(age, name) {
  this.age = age;
  this.name = name;
  return new Proxy(this, {
    get: function (target,key) {
      return target[key];
    },
    set: function (target, key,value) {
      if (validtor[key](value)) {
        return Reflect.set(target,key,value)
      } else {
        throw new Error(key+'is not right')
      }
    }
  })
}

//虚拟dom     只在概念里面里面存在

<template>
  <div id="123">
    <p><span></span></p>
    <p>11</p>
    <p>123</p>
  </div>
</template>
//diff算法
var virtual = {
  dom: 'div',
  props: {
    id='123'
  },
  children: [
    {
      dom: 'p',
      children: [
        {
          dom: 'span'
        }
      ]
    },
    {
      dom: 'p',
      text:11,
      children: [

      ]
    },
    {
      dom: 'p',
      text:123,
      children: [

      ]
    },
  ]
}
//diff算法比对
patchVnode(oldVnode, vnode){
  // 先拿到真实dom
  const el = vnode.el = oldVnode.el;
  // 分别拿到老节点的子元素和新的节点的子元素
  let i, oldCh = oldVnode.children, ch = vnode.children;
  // 如果老节点新节点相同  不做任何事情
  if (oldVnode === vnode) return;
  // 分情况操作--只有文字节点
  if (oldVnode.text !== null && vnode.text !== null && oldVnode.text !== vnode.text) {
    api.setTextContent(el,vnode.text)
  } else {
    updateEle();
    // 如果所有的老新节点的Node子元素都存在，那么肯定是发生了子元素变动
    if (oldCh && ch && oldCh !== ch) {
      // 子元素变动
      updateChildren()
    } else if (ch) {
      // 增加了子元素
      createEl(vnode);
    } else if (oldCh) {
      // 删除了子元素
      api.removeChildren(el);
    }
  }
}

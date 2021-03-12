// ========================================
// 订阅者
// ========================================
class Dep{
  // subs 存放观察者watcher对象
  constructor() {
    this.subs = []
  }
  // 添加观察者
  addSub(sub) {
    this.subs.push(sub)
  }
  // 通知观察者更新数据
  notify() {
    console.log('~~~ Dep update ~~~')
    this.subs.forEach(sub => {
      sub.update()
    })
  }
}

// ========================================
// 观察者
// ========================================
class Watcher {
  // new Watcher 时将该对象赋值给Dep.target,在get中会用到
  constructor() {
    Dep.target = this
  }
  update() {
    console.log('~~~ Watcher update views ~~~')
  }
}

// ========================================
// 通过 Object.defineProperty 依赖收集,触发Dep的notify通知所有的watcher对象更新视图
// ========================================

function observer(obj) {
  Object.keys(obj).forEach(key => {
    let val = obj[key]
    const dep = new Dep()
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get: function reactiveGetter() {
        // 将Dep.target（即当前的watcher对象存入dep中的subs中）
        dep.addSub(Dep.target)
        return val
      },
      set: function (newVal) {
        if (val === newVal) {
          return
        }
      /* 在set的时候触发 dep 的 notify来通知所有的Watcher对象更新视图 */
        val = newVal
        dep.notify()
        console.log('observer 视图更新～')
      }
    })
  })
}

// ========================================
// 模拟 mvvm
// ========================================
class Mvvm {
  constructor(options) {
    this._data = options.data
    observer(this._data)
    /* 新建一个Watcher观察者对象，这时候Dep.target会指向这个Watcher对象 */
    new Watcher()
    console.log(this._data.name)
  }
}


let o = new Mvvm({
  data: {
    name: 'mvvm ~'
  }
})

// 浏览器环境 通过点击事件触发
document.body.addEventListener('click', () => {
  o._data.name = 'mvvm update~' + new Date().getTime()
})
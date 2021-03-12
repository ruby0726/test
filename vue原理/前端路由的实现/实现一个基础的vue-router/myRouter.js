class HistoryRoute {
  constructor() {
    this.current = null
  }
}

// vueRouter 类
class vueRouter {
  constructor(options) {
    this.mode = options.mode || 'hash'  // 默认hash
    this.routes = options.routes || []
    this.history = new HistoryRoute;
    this.routesMap = this.createMap(this.routes)
    this.init()  // 注册监听,触发监听事件
  }
  init() {
    if (this.mode == 'hash') {
      location.hash ? '' : localtion.hash = "/"
      window.addEventListener("load", () => {
        this.history.current = location.hash.slice(1)
      })
      // 监听url改变
      window.addEventListener("hashchange", () => {
        // 改变vue-router里的current变量
        this.history.current = localtion.hash.slice(1)
      })
    } else {
      localtion.pathname ? '' : localtion.pathname = '/'
      window.addEventListener("load", () => {
        this.history.current = location.pathname
      })
      window.addEventListener("popstate", () => {
        this.history.current = location.pathname
      })
    }
  }
  createMap(routes) {
    return routes.reduce((memo, current) => {
      memo[current.path] = current.component
      return memo
    },{})
  }
}


//   触发vue监听
vueRouter.install = function (Vue) {
  Vue.mixin({
    beforeCreate() {
      if (this.$options && this.$options.router) {
        this._root = this
        this._router = this.$options.router
      } else {
        this._root = this.$parent._root
      }
      Vue.util.defineReactive(this, "current", this._router.history)
      Object.defineProperty(this, '$router', {
        get() {
          return this._root._router
        }
      })
    }
    
  })
  Vue.component('router-view', {
    render(h) {
      let current = this._self._root._router.history.current;
      let routesMap = this._self._root._router.routesMap
      return h(routesMap[current])
    }
  })
}

export default vueRouter;

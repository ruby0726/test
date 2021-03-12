function fun(n, o) {
  console.log(o);
  return {
    fun: function (m) {
      return fun(m, n);
    }
  }
}
var a = fun(0)  // undefined  a= fun:function(m){return fun(m,n)}
var a = 11
function test1() {
  this.a = 22;
  let b = function () {
    console.log(this.a);
  };
  b();
}
var x = new test1();  //非严格模式下，输出11

var a = 11;
function test2() {
  this.a = 22;
  let b = () => { console.log(this.a) }
  b();
}
var x = new test2();  //输出22


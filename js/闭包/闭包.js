var name = "The Window";

var obj = {
  name: "My Object",

  getName: function () {
    return function () {
      return this.name;
    };
  }
};

console.log(obj.getName()());  // undefined


// var name = "The Window";

// var obj = {
//   name: "My Object",

//   getName: function () {
//     var that = this;
//     return function () {
//       return that.name;
//     };
//   }
// };

// console.log(obj.getName()()); 
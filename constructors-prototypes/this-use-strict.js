//! Now using strict mode
"use strict";

//! global context
console.log(this);

//! local context
function demo(a, b) {
  console.log(this);
  console.log(a, b);
}

var fun1 = function (a, b) {
  console.log(this);
  console.log(a, b);
};
//demo(); // undefined
//fun1(); //undefined

//! object
var obj1 = {
  name: "Arafat",
  print: function () {
    console.log(this);
  },
};

obj1.print(); // obj1

//we can easily handle this using call, bind and apply method

demo.call(obj1, 3, 4); //this refer to the obj1
fun1.apply(obj1, [3, 4]); //this refer to the obj1

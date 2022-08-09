//! Q. 1
/*
"use strict";

function bike() {
  console.log(this.name);
}

let obj = {
  name: "yamaha",
  print: bike,
};

obj.print(); //yamaha
*/
//! Q. 2
let obj = {};
function A() {
  return obj;
}
function B() {
  return obj;
}

console.log(A()); //Object {  }
console.log(B()); //Object {  }
console.log(A() == B()); //true
console.log(A() === B()); //true

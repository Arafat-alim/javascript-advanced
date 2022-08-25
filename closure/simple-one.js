//! A function binds together within a lexical environment

function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  a = 100;
  return y;
  a = 200; // when we return then it wont consider
}

let funY = x();
console.log(funY); //[Function: y]
console.log(funY()); // 100 undefined

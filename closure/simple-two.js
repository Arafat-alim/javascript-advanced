function z() {
  function x() {
    var a = 10;
    function y() {
      var b = 100;
      console.log(`The value a = ${a} and value of b = ${b}`);
    }
    return y;
  }
  return x;
}

//! calling z()

let xFun = z();
console.log(xFun); //[Function: x]
let yFun = xFun();
console.log(yFun); // [Function: y]
yFun(); //The value a =  10 and value of b = 100

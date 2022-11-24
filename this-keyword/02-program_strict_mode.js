//! this keyword - It refers to object on which a funciton is called and hence it is defined by the execution context

//! this values can be affected by the strict mode
"use strict";

console.log(this); //! window object

function myFun2() {
  console.log(this); //! undefined
}

// ! Basic example of HOF
//! A function which take another function as an argument and return a function
//! Here x is the Callback function
function x() {
  return "Hello";
}

//! Here Y is the higher order function
function y(x) {
  console.log(x());
}

y();

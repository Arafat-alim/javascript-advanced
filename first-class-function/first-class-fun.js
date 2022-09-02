//! FIrst Class Function
//! Function Statement or Function Declaration
// abc();
// b();
// function abc() {
//   console.log("Function Statement");
// }

//! Function Expression
// var b = function () {
//   console.log("Function Expression");
// };

//! Function Anonymous Function
// function(){
//     console.log("anonymous FUnction")
// }

//! Named Function Expression
// var c = function xyz() {
//   console.log("Named Function");
//   console.log(xyz);
// };

// c(); //named Function
// axyz(); // error - Reference Error

//! parameter and arguements
// function check(param1, param2) {
//   console.log(`access param inside the scope only ${param1} and ${param2}`);
// }
// check("Args1", "Arg2"); //access param inside the scope only Args1 and Arg2

//! Functions are treated as arguments and can take a parameter
// var big = function (fun1) {
//   console.log(`Your Function$ ${fun1}`);
//   fun1();
// };

// big(function () {
//   console.log("hello Arguments");
// });

//! Function can be returned from a function function
var changing = function () {
  return function () {};
};

console.log(changing()); //ƒ () {}

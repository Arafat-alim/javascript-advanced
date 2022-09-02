//! Let
//! case 1 in let -- variable already declared in seperate memory
// let a = 10;
// var a; //syntax error
// console.log(a);

//! case 2 in let -- Temporal Dead zone
console.log(a); // ReferenceError: can't access lexical declaration 'a' before initialization

let a;
a = 10;

//! case 1 in const
// const b; //syntax error -  missing = in const declaration
// b = 10;

//! case 2 in const
// const b = 1000;
// b = 10; // TypeError: invalid assignment to const 'b'

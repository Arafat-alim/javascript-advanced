//! "new" keyword is used to create an object
//! Constructor object

const myNum = new Number(100.147);
console.log(myNum.toFixed()); //100

//! creting string constructor
const str = new String("Arafat");
console.log(str);
const newStr = str.toUpperCase();
console.log(newStr); // ARAFAT

//! creating boolean construtor
const bool = new Boolean(true);
console.log(bool);
console.log(bool ? "hello" : "Bye"); // Hello

//! creating array constructor
const arr = new Array(1, 2, 3, 4);
console.log(arr); // [ 1, 2, 3, 4 ]
arr.push(7);
console.log(arr); // [ 1, 2, 3, 4, 7 ]

//! creating object constructor
const obj = new Object();
obj.name = "Arafat";
console.log(obj); // { name: 'Arafat' }

//! creating date
const myDate = new Date("August 13, 2025");
console.log(myDate); //Wed Aug 13 2025 00:00:00 GMT+0530 (India Standard Time)
console.log(myDate.getFullYear()); //2025

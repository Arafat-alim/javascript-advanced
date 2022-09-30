//! There are two categories of data types
//! 1. Primitive Datatypes and 2. Non Primitive/ complex Datatypes
//! There are very data types are - 1. Numbers, 2. String, 3. Boolean, 4. Undefined, 5. BigInt, 6, Symbol
//! Numbers
const num = 1;
console.log(typeof num); // number

//! String
const str = "hello";
console.log(typeof str); // string

//! Boolean
const isWork = true;
console.log(typeof isWork); // boolean

//! Undefined
const val = undefined;
console.log(typeof val); // undefined

//! Big Int
const hugeBin = BigInt("0b111");
console.log(typeof hugeBin); // string

//! symbol
const sym2 = Symbol("foo");
console.log(typeof sym2); //symbol

console.log(typeof null); //object
console.log(typeof NaN); // number

//! 2. Complex Data types
const arr = [];
console.log(typeof arr); // object
const obj = {};
console.log(typeof obj); // object
const map = new Map();
console.log(typeof map); // object
const set = new Set();
console.log(typeof set); // object

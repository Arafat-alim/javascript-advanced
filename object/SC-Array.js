//! 1st method - spread Operator -- Array
const numbers = [1, 2, 3, 4];
const copiedNum = numbers;
const newNum = [...numbers];

// ! Adding an elmeent to the numbers
numbers.push(5);
console.log(numbers); // [ 1, 2, 3, 4, 5 ]
console.log(copiedNum); // [ 1, 2, 3, 4, 5 ]
console.log(newNum); // [ 1, 2, 3, 4 ]

console.log(numbers === newNum); //false
//! 2nd method - slice method -- Array
const num2 = [32, 54, 67, 98];
const copyNum2 = num2;
const newNum2 = num2.slice();

// adding an elmeent in the num2
num2.push(1000000);

console.log(num2 === newNum2); //false

console.log(num2); //[ 32, 54, 67, 98, 1000000 ]
console.log(copyNum2); //[ 32, 54, 67, 98, 1000000 ]
console.log(newNum2); //[ 32, 54, 67, 98, 1000000 ]

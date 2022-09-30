//! It return a new array, it is basically used to filter out some elements on some conditions

const nums = [1, 2, 3, 4, 5];
//! find out the even numbers
const evenNum = nums.filter((value) => value % 2 === 0);
console.log(evenNum); //[ 2, 4 ]

//! reverse the string

const name = "Arafat";
//!  convert the string into an array
const arrayString = name.split("");
//! reverse the array
const reverseArray = arrayString.reverse();

//! converted back to the string
const reverseString = reverseArray.join("");
console.log(reverseString); //tafarA

//simplest way
const name2 = "Aqiub";
const reverseValue = name2.split("").reverse().join("");
console.log(reverseValue);

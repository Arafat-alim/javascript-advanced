//! Filter Method is used to help to filter out the values on base some logic

let arr = [5, 1, 3, 4, 6];

function isOdd(x) {
  return x % 2 !== 0;
}
function isEven(x) {
  return x % 2 === 0;
}

function greaterThan4(x) {
  return x > 4;
}

function greaterThan6(x) {
  return x > 6;
}
let ansOdd = arr.filter(isOdd);
let ansEven = arr.filter(isEven);
let greater4 = arr.filter(greaterThan4);
let greater6 = arr.filter(greaterThan6);

console.log(ansOdd); // [5,1,2]
console.log(ansEven); // [4,6]
console.log(greater4); // [5,6]
console.log(greater6); // []

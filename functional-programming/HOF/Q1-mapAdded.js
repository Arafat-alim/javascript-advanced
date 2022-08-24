//! create a logic
let area = function (rad) {
  return Math.PI * rad * rad;
};

//! HOF --> calculate
//! Please avoid ES6 syntax
Array.prototype.calculate = function (logic) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};
let arr = [2, 3, 4, 5];
// console.log(calculate(arr, area));
console.log(arr.calculate(area));
// ! We can calculate the area using the map method
console.log(arr.map(area));

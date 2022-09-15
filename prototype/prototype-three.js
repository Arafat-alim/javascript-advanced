//! Implementation of prototype

//! lets add the custom method in array constructor

Array.prototype.myFun = function () {
  console.log("You are printing us");
};

//! lets add the custom method in Object constructor
Object.prototype.printName = function () {
  console.log(this.name);
};
//! lets add the custom method in function constructor
Function.prototype.addFun = function () {
  console.log("you are added");
};

let arr = [1, 2, 34];
console.log(arr.myFun());

let obj = {
  name: "Arafat",
};

console.log(obj.addFun());

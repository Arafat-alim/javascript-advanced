// ! ProtoType
//! Array
let arr = [1, 2, 3];
console.log(arr.length); //3
console.log(arr.__proto__); // [] array
console.log(arr.__proto__.__proto__); // object
console.log(arr.__proto__.__proto__.__proto__); // null

console.log(arr.prototype); // array constructor

//! Object
let obj1 = {
  name: "Arafat",
  city: "Kolkata",
  getIntro: function () {
    console.log(this.name + " " + this.city);
  },
};

console.log(obj1.__proto__); // {} object
console.log(obj1.__proto__.__proto__); //null

//! function
function abbas() {
  console.log("Google");
}
console.log(abbas.__proto__); // [fun] function
console.log(abbas.__proto__.__proto__); // {} object
console.log(abbas.__proto__.__proto__.__proto__); // null

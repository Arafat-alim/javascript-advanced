//! Q Problem what we are facing
function Vehicle(name, price) {
  this.name = name;
  this.price = price;
  //! Behaviour is added
  this.getPrice = function () {
    console.log(this.price);
  };
}

//creating an object
let v1 = new Vehicle("Goku", 4000);
let v2 = new Vehicle("Goku", 4000);

console.log(v1);
console.log(v2);
//! Here v1 creats an individual copy of getPrice
//! No of times we create objects, it create number of individual copies of function

console.log(Vehicle.prototype);
/* Object { … }
​constructor: function Vehicle(name, price)
*/

console.log(Vehicle.prototype.constructor);
/* 

function Vehicle(name, price)
arguments: null
​caller: null
​length: 2
​name: "Vehicle"
​prototype: Object { … }

*/

//! What is deep copying?
//! It helps us to create an identical independent copy of array and object

//! Why do we need this when shallow copy is already avaiable
//! The problem arises when we faced the nested object, here shallow copy both Object.assign()
//! And Spread Operator failed, below is the example of spread operator
const obj = { name: "Arafat", age: 21, car: { brand: "Tata", color: "blue" } };
const shallowCopy = { ...obj };

//! uodating the value of car object which is nested inside the obj
obj.car.color = "red";
//! Here we clearly see the changes happen both in the obj and shallow copy.
console.log(obj); //{ name: 'Arafat', age: 21, car: { brand: 'Tata', color: 'red' } }
console.log(shallowCopy); //{ name: 'Arafat', age: 21, car: { brand: 'Tata', color: 'red' } }

//! If we want to fix the above code then we have to go to deeper and again call the spread,
//! Below is the example
const person = { name: "Asif", bike: { brand: "Yamaha", color: "black" } };
const shallowCopy2 = { ...person, bike: { ...person.bike } };

//! updating the person bike color to purple
shallowCopy2.bike.color = "purple";
console.log(person);
console.log(shallowCopy2);

//! Now here comes up with the solution deep cloning there is two method which can helps us from this situation
const person1 = {
  name: "Mehmoon",
  bike: { brand: "Pulsar", color: "NinjaWhite" },
};
const pureObjectCloning = JSON.parse(JSON.stringify(person1));

person1.bike.color = "black";

console.log(pureObjectCloning); //{ name: 'Mehmoon',bike: { brand: 'Pulsar', color: 'NinjaWhite' } }
console.log(person1); //{ name: 'Mehmoon', bike: { brand: 'Pulsar', color: 'black' } }

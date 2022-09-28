//! Call by reference
//! Arrays
const number = [1, 2.3];
const anotherNum = number;

number.push(4);
console.log(number); //[ 1, 2.3, 4 ]
console.log(anotherNum); //[ 1, 2.3, 4 ]

console.log(number === anotherNum); //true

//! Object
const person = { name: "Arafat" };
const anotherPerson = person;

person.name = "Mehmood";
console.log(person); //{ name: 'Mehmood' }
console.log(anotherPerson); //{ name: 'Mehmood' }

console.log(person === anotherPerson); //true

// Same memory location

//! this keyword - it refers to the current object on which a funciton or method is called and hence it is defined by the execution context

this.age = 25;

function greet() {
  console.log(`My age is ${this.age} years old `);
}

greet(); // ! My age is 25 Years old

//! bind the function using an object
const person = {
  greetMe: greet,
};

person.greetMe(); //! My age is undefined years old

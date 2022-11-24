//! Button Element click calling

let button = document.querySelector("button");

//this.age = 45; // globla addition
setTimeout(function () {
  console.log(this.age); //! window object
}, 1500);

button.addEventListener("click", function () {
  console.log(this); //! Pointing to the element
});

//! Class - It is a blueprint of an object, with the help of class we can create many object as we want
//! Previously we used the constructor function for creating many objects

class Person {
  constructor() {
    this.age = 45;
  }
  greet() {
    console.log("My age is - ", this.age);
  }

  greetMe() {
    setTimeout(function () {
      console.log("My Age is : ", this.age); // undefined
    }, 2000);
  }
}

//! creating an instance of class person
const person = new Person();
person.greet(); //! My age is 45
person.greetMe(); //! My age is undefined

//! here biggest blunder story of this
for (let x = 0; x < 5; x++) {
  setTimeout(function () {
    console.log(this); // window window window window window
    console.log(x); // 0 1 2 3 4
  });
}

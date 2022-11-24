class Person {
  constructor() {
    this.age = 12;
  }

  greet() {
    console.log("My age is ", this.age);
  }

  greetMe() {
    const that = this;
    setTimeout(function () {
      console.log("That is called", that);
      console.log("That age is called", that.age);
      console.log("This called", this);
      console.log("This age called", this.age);
    }, 1500);
  }
}

//! Creating an instance
const p1 = new Person();
p1.greet();
p1.greetMe();

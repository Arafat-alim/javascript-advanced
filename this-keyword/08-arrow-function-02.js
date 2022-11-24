this.name = "Arafat";

class Employee {
  constructor() {
    this.age = 25;
  }
  getAge() {
    console.log("My age is ", this.age);
  }

  getAgeToo() {
    setTimeout(() => {
      console.log(this);
      console.log("Too age", this.age);
      console.log("Too age", this.name); // undefined
    });
  }
}

//! instance of a class
const emp = new Employee();
emp.getAge();
emp.getAgeToo();

for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(this);
    console.log(i);
  }, 2000);
}

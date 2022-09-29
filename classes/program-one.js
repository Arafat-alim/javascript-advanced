const person = {
  name: "Arafat",
  age: 12,
};

//! creating a class - becuase of schema represtation
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const n1 = new Person("Arafat", 12);
console.log(n1);

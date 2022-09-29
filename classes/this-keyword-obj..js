const person = {
  name: "Arafat",
  age: 24,
  getFun: function () {
    console.log(`${this.name} and age is ${this.age}`);
  },
};

person.getFun(); // Arafat and age is 24

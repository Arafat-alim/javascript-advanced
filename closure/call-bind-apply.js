//! WHy do we need call bind and apply

let name = {
  firstName: "Arafat",
  lastName: "ALim",
  getFullName: function () {
    console.log(`My Name is ${this.firstName} ${this.lastName}`); //this keyword refers to the name object
  },
};
//support another object want to access the getFullName method
let name1 = {
  firstName: "Amir",
  lastName: "Khan",
  getFullName: function () {
    console.log(`My Name is ${this.firstName} ${this.lastName}`); //this keyword refers to the name object
  },
};

name.getFullName(); //My Name is Arafat ALim
name1.getFullName(); //My Name is Amir khan

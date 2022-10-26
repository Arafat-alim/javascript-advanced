const name = {
  firstName: "Arafat",
  lastName: "Alim",
};

//! creating a function
function printName() {
  console.log(this.firstName + " " + this.lastName); //Arafat Alim
}

//! execution of function
//! bind function return a new function

let printMyName = printName.bind(name);
printMyName();

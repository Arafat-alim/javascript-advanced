//! lets first see the inbuilt bind method
const name = {
  firstName: "Arafat",
  lastName: "Alim",
};

function printName(homeTown, state) {
  console.log(
    this.firstName + " " + this.lastName + " " + homeTown + " " + state
  );
}

let printMyName = printName.bind(name, "kolkata");
printMyName("Maharastra");

//! creating our own bind method
Function.prototype.myBind = function (...args) {
  let obj = this;
  let params = args.slice(1); //return a new array
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

let printMyName2 = printName.myBind(name, "chennai");
printMyName2("West Bengal");

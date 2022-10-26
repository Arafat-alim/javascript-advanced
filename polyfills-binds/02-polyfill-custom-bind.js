//! creating the custom bind function by own
const name = {
  firstName: "Arafat",
  lastName: "Alim",
};

function printName(homeTown, state) {
  console.log(
    this.firstName + " " + this.lastName + ", " + homeTown + " " + state
  );
}

//execution
let printMyName = printName.bind(name, "kolkata", "West Bengal");
printMyName();
//! Adding into the function properties
//! Returning a new function and called
//!calling inside the function --> call method is there for us
//! myBind method is accepting an arguments which parameter acts as an arguments[0]
//! Problem arises in the arguemnt passing the function printName
//! Extracting the params
//! Parameter arguments is accepting
Function.prototype.myBind = function (...args) {
  // this --> printName
  let obj = this;
  let params = args.slice(1); // return an array
  //! slice method remove the element and return the rest
  return function (...args2) {
    // obj.call(args[0]);

    obj.apply(args[0], [...params, ...args2]);
  };
};

//execution of custom bind
let printMyName2 = printName.myBind(name, "kolkata");

printMyName2("West Bengal");

//!Here we use the call, apply and bind method

let getFullName = function (city, state) {
  console.log(
    `My Name is ${this.firstName} ${this.lastName} and i lived in ${city} ${state}`
  ); //this keyword refers to the name object
};

//

let name1 = {
  firstName: "Arafat",
  lastName: "Alim",
};
//support another object want to access the getFullName method
let name2 = {
  firstName: "Amir",
  lastName: "Khan",
};

// Now what to print the amir khan, but our name1 object dont have that method
//!Here we use the call, apply and bind method --> // directly invoke the function
getFullName.call(name2, "kolkata", "WestBengal"); //My Name is Amir Khaen
getFullName.apply(name1, ["Chennai", "Karnataka"]); //My Name is Arafat Alim and i lived in Chennai
const func = getFullName.bind(name1, "Chennai", "Karnataka"); //My Name is Arafat Alim and i lived in Chennai
console.log(func); //[Function: bound getFullName]
func();

//! Prototype
let obj1 = {
  name: "Arafat",
  city: "Kolkata",
  getName() {
    console.log(this.name + " from " + this.city);
  },
};
//! Please paste it into the console of browser to get the relevant answer
console.log(obj1.getName()); // Arafat from Kolkata

let obj2 = {
  name: "Akash",
};

//Never do this in your code
obj2.__proto__ = obj1;

console.log(obj2.name); //Akash
//! Here, js engine first look into its own object, if it does not found it,
//! then it looks into the parent object, so if it again not found then it looks again,
//! if there any parent pressnt otherwise it return the "null"
console.log(obj2.city); //Kolkata

//! Please paste it into the console of browser to get the relevant answer
console.log(obj2.getName()); //Akash from Kolkata

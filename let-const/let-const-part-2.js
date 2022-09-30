//! some trickiness about the let const and var

if (false) {
  var firstNameVar = "Arafat";
  let firstnameLet = "Mehmood";
}
console.log(firstNameVar); // undefined
console.log(firstNameLet); // Error Is not defined

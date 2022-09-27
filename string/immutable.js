//! Strings are immutable in JS

let naam = "Asif";
console.log(naam[0]); // A
naam[0] = "P";

console.log(naam); // Asif -- no change

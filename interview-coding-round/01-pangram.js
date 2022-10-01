//! isPangram or not?
const abc = "abcdefghijklmnopqrstuvwxyz";
const str1 = "The quick brown fox jumps over the lazy dog";
const check = "AB CD EEEEEBBB";
// console.log(abc.length); //26

//! string and array methods
// function isPangram(string){
//     const lowerString = [...new Set(string.toLowerCase().split(" ").join(""))].join("");
//     // return abc;
//     return lowerString === abc;
// return lowerString.length === 26;
// return abc === lowerString ;

// }

//! Regex method
function isPangram(string) {
  const regexEx = new Set(string.toLowerCase().match(/[a-z]/gi));
  return regexEx.size === 26;
}

console.log(isPangram(check));
console.log(isPangram(str1));
console.log(isPangram(check));

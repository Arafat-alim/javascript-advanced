//! Pattern Problem
//!
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

function pattern(num) {
  let str = "";
  for (let row = 1; row <= num; row++) {
    for (let col = 1; col <= num; col++) {
      str += "* ";
    }
    str += "\n";
  }
  return str;
}

console.log(pattern(5));

//! Pattern Problem
// ****
// ***
// **
// *

function pattern(num) {
  let str = "";
  for (let row = 1; row <= num; row++) {
    for (let col = 1; col <= num + 1 - row; col++) {
      str += "*";
    }
    str += "\n";
  }
  return str;
}
console.log(pattern(4));

//! Pattern Problem 1
// *
// * *
// * * *
// * * * *
console.log("GOGO");
let str = "";
function pattern(num) {
  for (let row = 1; row <= num; row++) {
    for (let col = 1; col <= row; col++) {
      //   console.log("* ");
      str += "* ";
    }
    str += "\n";
  }
  return str;
}

console.log(pattern(4));

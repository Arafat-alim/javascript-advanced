//! Pattern Problem 4
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

let str = "";
function pattern(num) {
  for (let row = 1; row <= num; row++) {
    for (let col = 1; col <= row; col++) {
      str += col;
    }
    str += "\n";
  }
  return str;
}

console.log(pattern(5));

const arr = [5, 1, 3, 6];
//! Map is used for transforming an array

function double(x) {
  return 2 * x;
}
function triple(x) {
  return 3 * x;
}

//convert the above array element into a binary number
function binary(x) {
  return x.toString(2);
}

let bin = arr.map(binary); //double is the logic
console.log(bin);

let doub = arr.map(binary);
console.log(doub);

let trip = arr.map(triple);
console.log(trip);

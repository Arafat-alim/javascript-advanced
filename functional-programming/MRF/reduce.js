let arr = [5, 1, 3, 4, 6];

//find sum of the array
function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
//! Convert the follwing code into reduce method
let output = arr.reduce((acc, curr) => {
  return acc + curr;
}, 0);

// find the max of the array
function findMax(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

//Reduce method
let maxOutput = arr.reduce((max, curr) => {
  if (curr > max) {
    max = curr;
  }
  return max;
}, 0);
console.log(findSum(arr)); //19
console.log(output); //19
console.log(findMax(arr)); //6
console.log(maxOutput); //

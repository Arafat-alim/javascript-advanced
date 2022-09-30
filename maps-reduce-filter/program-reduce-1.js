//! Reduce method - it is used to reduce an array return a very simplied form ( single value or new array).
const nums = [1, 2, 3, 4, 5];
const totalSum = nums.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(totalSum); //15

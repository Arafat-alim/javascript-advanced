//! It return a single value or a new array after reducing the given array.
//! it perform operation on array and also filter out the elements from array on conditons

const nums = [1, 2, 3, 4, 5];
// ! Add by one to each element and filter out the Even numbers from it
const addByOneEven = nums.reduce((acc, curr) => {
  curr = curr + 1;
  if (curr % 2 === 0) {
    acc.push(curr);
  }
  return acc;
}, []);

console.log(addByOneEven); // [2,4,6]

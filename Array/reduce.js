//! Array.reduce() --> It computes all the values of the array into single value (return single value)

const groceryList = [13, 21, 45, 6, 78, 97, 9, 8];

// ! Foreach
let total = 0;
groceryList.forEach((item) => {
  total += item;
});
console.log(total); // 277

// ! using reduce method
const totalPrice = groceryList.reduce((acc, curr) => (acc += curr));

console.log(totalPrice);

// ! Rest operator

const addition = (a, b) => {
  return a + b;
};

console.log(addition(12, 34)); //45
//! just adding only two numbers
console.log(addition(12, 34, 212, 34, 67)); //45

//! Function upgrade
const upgradeAddition = (...args) => {
  console.log(args); // Array
  return args.reduce((acc, currVal) => (acc += currVal));
};

console.log(upgradeAddition(12, 34, 212, 34, 67)); // 359

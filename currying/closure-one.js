//! WE can also perform currying using closure

const multiply = (a) => {
  return function (b) {
    return a * b;
  };
};

console.log(multiply(3)(3)); //9
let multiplyByTwo = multiply(2);
console.log(multiplyByTwo(3)); // 6

//! Currying function

//! Bind method
const multiply = (a, b) => {
  console.log(a * b);
};

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(2); // 4

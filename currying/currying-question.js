//! Currying function
const sum = function (a) {
  return function (b) {
    if (b) {
      return sum(a + b);
    } else {
      return a;
    }
  };
};

const ans = sum(1)(2)(3)(4)(5)();
console.log(ans); // 15

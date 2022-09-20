//! Memoization is an optimisation technique, it is helps us to reduce the
//! time consuming calculation by saving previous input to something is called "cache".
//! and returning the result

//! lets create the sum function
let sum = 0;
const calc = (n) => {
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
};

//! now lets create a memoization function or cache function
const memo = (fun) => {
  let cache = {};
  return function (...args) {
    let n = args[0];
    if (n in cache) {
      console.log("Cache is here, no fear");
      return cache[n];
    } else {
      console.log("First TIme - Calculating...");
      let result = fun(n);
      cache[n] = result;
      return result;
    }
  };
};

//! without using memoization techique
// console.time();
// console.log(calc(10));
// console.timeEnd();

//! Using memoization technique
console.time();
const efficient = memo(calc);
const answer = efficient(10);
console.log(answer);
console.timeEnd();

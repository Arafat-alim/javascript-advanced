//! How to deal with asynchronous code

const fun = () => {
  return;
};

console.log(fun()); //undefine

const fun1 = async () => {
  return;
};

console.log(fun1()); //promise

const fun2 = async () => {
  return 25;
};
//! How to access it
fun2().then((val) => console.log(val)); //25

//! fetched numbering
const fetchNumbers = async () => {
  return 100;
};

const fun4 = async () => {
  console.log(await fetchNumbers()); // calling promise
};

console.log(fun4());

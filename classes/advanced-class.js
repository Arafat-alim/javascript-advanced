//! Here js is  moving from object programming to functional programming, so we can create an object
//! using function programming

const createSchema = (name, age, isworking) => {
  return {
    name,
    age,
    isworking,
  };
};

let u1 = createSchema("Arafat", 24, true);
let u3 = createSchema("Asif", 24, true);
let u2 = createSchema("Mahmood", 24, true);
console.log(u1); //{ name: 'Arafat', age: 24, isworking: true }
console.log(u2); // { name: 'Mahmood', age: 24, isworking: true }
console.log(u3); // { name: 'Asif', age: 24, isworking: true };

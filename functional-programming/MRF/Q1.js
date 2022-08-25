const users = [
  { firstName: "Arafat", lastName: "Alim", age: 26 },
  { firstName: "Asif", lastName: "Ahmed", age: 75 },
  { firstName: "Md", lastName: "Akbar", age: 50 },
  { firstName: "Ram", lastName: "Gopal", age: 26 },
];

//! Use map method to get the full name
let getFullName = users.map((x) => {
  return x.firstName + " " + x.lastName;
});

//! Use reduce method to get no. of repeated element values
let repeatedAge = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

//! print firstname which has age < 30

let age30 = users.filter((x) => x.age < 30).map((x) => x.firstName);

//! DO the same thing using reduce print the firstname whose age is less than 30
let reduceAge30 = users.reduce((acc, curr) => {
  if (curr.age < 30) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);

console.log(reduceAge30);
console.log(getFullName); //[ 'Arafat Alim', 'Asif Ahmed', 'Md Akbar', 'Ram Gopal' ]
console.log(repeatedAge); //{ '26': 2, '50': 1, '75': 1 }
console.log(age30); //[ 'Arafat', 'Ram' ]

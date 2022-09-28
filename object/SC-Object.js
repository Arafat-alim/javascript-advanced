//! Shallow copy - It is the fixation of copy by address/reference issue
//! 1st method - spread Operator -- object
//! 2nd method - Object.assign-- object
const person = { name: "Arafat", age: 17 };
const copiedPerson = person; //here is the issue
const newPerson = { ...person };

//! modifying the person
person.name = "Hamed";

console.log(person); //{ name: 'Hamed', age: 17 }
console.log(copiedPerson); //{ name: 'Hamed', age: 17 }
console.log(newPerson); //{ name: 'Arafat', age: 17 }

//! Shallow copy - Object.assign() -- Object
const obj2 = { name: "Mom", age: 21 };
const copyObj2 = obj2;
const newObj2 = Object.assign({}, obj2);

// ! Updating properties into the obj2
obj2.name = "Roman";

console.log(obj2); //{ name: 'Roman', age: 21 }
console.log(copyObj2); //{ name: 'Roman', age: 21 }
console.log(newObj2); // { name: 'Mom', age: 21 }

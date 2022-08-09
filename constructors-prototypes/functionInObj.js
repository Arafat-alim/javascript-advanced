/*
function createStudent(name, rollNo, marks) {
  let student = {}; // new Object()
  student.name = name;
  student.rollNo = rollNo;
  student.marks = marks;
  return student;
}

let student1 = createStudent("abcs", 12, 45); //Object { name: "abcs", rollNo: 12, marks: 45 }
let student2 = createStudent("pqrs", 12, 45); //Object { name: "pqrs", rollNo: 12, marks: 45 }
console.log(student1);
console.log(student2);
 */

function createStudent(name, marks, rollNo) {
  //let student = {}; // new Object()
  this.name = name;
  this.marks = marks;
  this.rollNo = rollNo;
  //return student;
}

// here new keyword intialise the object and at the end return an object for us
let student1 = new createStudent("abcd", 1, 54);
let student2 = new createStudent("poiu", 2, 72);
console.log(student1);
console.log(student2);

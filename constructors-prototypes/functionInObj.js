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

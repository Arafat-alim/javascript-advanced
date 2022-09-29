function Myfun(name, age, isWork) {
  // ! Binding
  this.name = name;
  this.age = age;
  this.isWork = isWork;
  console.log(this);
}
//window object

const user1 = new Myfun("Arafat", 12, true); //{ name: 'Arafat', age: 12, isWork: true }
const user2 = new Myfun("B", 12, true);
const user3 = new Myfun("C", 12, true);
const user4 = new Myfun("D", 12, true);
const user5 = new Myfun("E", 12, true);

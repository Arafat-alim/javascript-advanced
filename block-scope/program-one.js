//! Global scope
const name = "Arafat";

function newFunc() {
  console.log(name);
}
newFunc();

function anotherFun() {
  var go = "Goku";
  //   console.log(goh); //cant access to this -- not define error
  function moreFun() {
    var goh = "gohan";
    console.log(go);
  }
  moreFun();
}

console.log(anotherFun());

//! Var support redeclaration within scope
if (true) {
  var modi = "Arafat";
  var modi = "Javed";
}

console.log(modi); //Javed

//! block scope
if (true) {
  var name1 = "Arafat";
  let name2 = "Aman";
  const name3 = "Alim";
}

console.log(name1); // arafat
console.log(name2); // not defined
console.log(name3); //not defined

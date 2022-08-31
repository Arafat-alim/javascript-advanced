var x = 1;
a(); // 100
b(); //101
console.log(x); //1

function a() {
  var x = 100;
  console.log(x);
}

function b() {
  var x = 101;
  console.log(x);
}

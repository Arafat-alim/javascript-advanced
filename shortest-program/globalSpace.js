//! Global Space
//!  Anything which is not define or declare in function is called global space

var a = 17;
function b() {
  var x = 12;
  console.log(x);
}

//! Here a is the global space
// How to access global space
console.log(window.a);
console.log(a);
console.log(this.a);

//! Not a global space is function b
//! How to access variable x?

b(); // 12;
console.log(x); //Reference Error --> Not define

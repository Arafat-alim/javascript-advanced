//! "this" always point to the current object.
//!  Window Object
console.log(this); //window object

function demo() {
  console.log(this); //window object
}

var demo2 = function () {
  console.log(this); // window object
};
demo2();
demo();

//! When this is called inside the object then it points only to that object
var obj = {
  name: "Arafat",
  print: function () {
    console.log(this); //obj
  },
};

obj.print(); // obj

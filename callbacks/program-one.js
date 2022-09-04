//! callback function

setTimeout(() => {
  console.log("Hey i am back");
}, 5000);

function x(y) {
  console.log("X is called");
  y();
}

//calling function x and passing y as a function (arguments)
x(function y() {
  console.log("Y is called");
});

// output
// x is called
// y is called
// Hey I am back

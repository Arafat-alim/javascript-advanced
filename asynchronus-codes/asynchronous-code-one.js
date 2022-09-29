//! Asynchronous Code

function one() {
  console.log("Function 1 is called");
  two();
  console.log("Function 1 part 2");
}

function two() {
  //! This is the part where asynchronus thing come out
  setTimeout(() => {
    console.log("Function 2 is called");
  }, 3000);
}

one();

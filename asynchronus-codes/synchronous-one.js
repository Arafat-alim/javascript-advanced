function one() {
  console.log("Function one is called");
  two();
  console.log("Function One, Part 1");
}

function two() {
  console.log("Function 2 is called");
}

one();

// ! Output
// function one is called
//function 2 is called
// function one, Part2

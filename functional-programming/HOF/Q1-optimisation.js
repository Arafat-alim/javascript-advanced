let radius = [1, 2, 3, 4];
//! Extracting the logic and make it as a function
function area(rad) {
  return Math.PI * rad * rad;
}

function circumference(rad) {
  return 2 * Math.PI * rad;
}

function diameter(rad) {
  return 2 * rad;
}

//! Optimization
//! HOF --> calculate()
let calculate = (rad, logic) => {
  let output = [];
  for (let i = 0; i < rad.length; i++) {
    // output.push(Math.PI * rad[i] * rad[i]);
    output.push(logic(rad[i]));
  }
  return output;
};

console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));

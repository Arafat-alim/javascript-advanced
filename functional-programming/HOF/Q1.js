let radius = [1, 2, 3, 4];

let calculateRadius = (rad) => {
  let output = [];
  for (let i = 0; i < rad.length; i++) {
    output.push(Math.PI * rad[i] * rad[i]);
  }
  return output;
};

let calculateCircumference = function (rad) {
  let output = [];
  for (i of rad) {
    output.push(2 * Math.PI * rad[i]);
  }
  return output;
};

let calculateDiameter = function (rad) {
  let output = [];
  for (i of rad) {
    output.push(2 * rad[i]);
  }
  return output;
};

let print = (rad) => {
  let output = [];
  for (let i = 0; i < rad.length; i++) {
    output.push(rad[i]);
  }
  return output;
};

console.log(print(radius));
console.log(calculateRadius(radius));
console.log(calculateCircumference(radius));
console.log(calculateDiameter(radius));

//! Transpose the matrix
const matrix = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];
console.log(matrix); //[ [ 1, 2, 3 ], [ 1, 2, 3 ], [ 1, 2, 3 ] ]
const tranpose = (arr) => {
  return arr[0].map((_, i) => arr.map((v) => v[i]));
};

console.log(tranpose(matrix)); // [ [ 1, 1, 1 ], [ 2, 2, 2 ], [ 3, 3, 3 ] ]

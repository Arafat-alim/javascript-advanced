//! Flatten the arary/nested array
//! Create a function makeFlatten function to flaten the array usin g recursive reduce

const nestedArr = [1, 2, [3, 5, 6, 7], 9, 8, 7];

function makeFlatten(arr) {
  return arr.reduce((acc, curr) => {
    return Array.isArray(curr)
      ? [...acc, ...makeFlatten(curr)]
      : [...acc, curr];
  }, []);
}

console.log(makeFlatten(nestedArr)); //[1, 2, 3, 5, 6, 7, 9, 8, 7];

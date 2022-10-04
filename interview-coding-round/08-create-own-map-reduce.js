//! implement your own array mapping funciton with reduce - map()
//! create own array map function using reduce

const arr = [1, 2, 3, 4];

const map = (arr, callback) => {
  return arr.reduce((acc, curr) => {
    return [...acc, callback(curr)];
  }, []);
};

console.log(map(arr, (v) => v + 1));

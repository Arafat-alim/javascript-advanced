let arr = [1, 2, 3, 4, 5];

Array.prototype.average = function () {
  let sum = 0;
  for (let i = 0; i < this.length; i++) {
    sum += this[i];
  }
  return sum / this.length;
};

console.log(arr.average());
// console.log(average(arr));

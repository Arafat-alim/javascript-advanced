function Counter() {
  let count = 0;
  this.incrementCounter = function () {
    count++;
    console.log(count);
  };
  this.decrementCounter = function () {
    count--;
    console.log(count);
  };
}

//Create an object
let count = new Counter(); //always add new keyword for creating a new onject
count.incrementCounter(); //1
count.incrementCounter(); //2
count.decrementCounter(); // 1

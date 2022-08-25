//! create a counter
function counter() {
  let count = 0;
  return function createCounter() {
    count++;
    console.log(count);
  };
}

let count1 = counter();
count1();
count1();
count1();
let count2 = counter();
count2(); //1
count2(); //2
count2(); //3
count2(); //4 .. so on

function outer() {
  //   var i = 10
  function inner() {
    console.log(i);
  }
  // var i = 20; //here only sequnce is matter but forms closure
  let i = 45;
  return inner;
}

outer()(); //20

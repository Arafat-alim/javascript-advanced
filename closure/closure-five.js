function outest() {
  let c = 147;
  function outer(b) {
    // let a = 20;
    function inner() {
      console.log(a, b, c);
    }
    return inner;
  }
  return outer;
}

// let a = 753; // it will not a of above lexical environment
var inner = outest()("HelloWorld")();
console.log(inner);

// ! Easy peasy
function x() {
  for (let i = 0; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}

// x();

//! FIx the above code with using the var keyword
function z() {
  for (var i = 1; i <= 5; i++) {
    function close(x) {
      setTimeout(() => {
        console.log(x);
      }, i * 1000);
    }
    close(i);
  }
}

z();

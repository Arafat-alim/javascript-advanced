function x() {
  let a = 10;
  let z = 12; //this one is collected by smart garbage collector.
  return function y() {
    console.log(a);
  };
}

let y = x();
y();

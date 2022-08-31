function expensiveFun() {
  console.log("Calling me", innerWidth);
}

const throttling = (fn, delay) => {
  let flag = true;
  return function () {
    let context = this;
    let args = arguments;
    if (flag) {
      fn.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
};

const betterFunction = throttling(expensiveFun, 2000);
window.addEventListener("resize", betterFunction);

let counter = 0;

function getData() {
  //Api calls
  console.log("Fetching Data", counter++);
}

const debounce = function (fn, d) {
  let timer;
  return function () {
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, d);
  };
};

let betterFunction = debounce(getData, 300);

function func1(a, b, c) {
  // a = // first argument
  // b = // first argument
  // c = // third argument
  console.log(arguments[0]); //1
  // expected output: 1

  console.log(arguments[1]); //2
  // expected output: 2

  console.log(arguments[2]); //3
  // expected output: 3
}

func1(1, 2, 3);

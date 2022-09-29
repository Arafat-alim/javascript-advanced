//! Rest Parameter

const addition = (a, b, ...manyMore) => {
  console.log(a); //1
  console.log(b); //2
  console.log(manyMore);
  [3];
};

addition(1, 2, 3);

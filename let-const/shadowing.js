//! shadowing the variable

// var a = 10;
// let b = 20;
// const c = 50;
// {
//   var a = 350;
//   let b = 20454;
//   const c = 74;
//   console.log(a); //350
//   console.log(b); // 20454
//   console.log(c); //74
// }

// console.log(a); // 350
// console.log(b); // 20
// console.log(c); // 50

const a = 10;
{
  const a = 20;
  {
    const a = 30;
    console.log(a); //30
  }
}

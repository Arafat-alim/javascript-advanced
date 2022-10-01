//! is Leap year or not. if year is divisble by 4 then it will give leap year and
//! if year is divisible by 400 then it returns not a leap year

function isLeapYear(year) {
  const num = Number(year);
  return num % 100 === 0 ? num % 400 === 0 : num % 4 === 0;
}
console.log(isLeapYear("2020")); // true
console.log(isLeapYear("2018")); //false
console.log(isLeapYear("1700")); //false
console.log(isLeapYear("1600")); //true

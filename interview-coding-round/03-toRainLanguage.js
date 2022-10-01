//! toRangLanguage challendge

function toRainLanguage(num) {
  if (num % 3 === 0 && num % 5 === 0 && num % 7 === 0) {
    console.log("PlingPlangPlong");
    return "PlingPlangPlong";
  } else if (num % 3 === 0 && num % 5 === 0) {
    return "PlingPlang";
  } else if (num % 3 === 0 && num % 7 === 0) {
    return "PlingPlong";
  } else if (num % 5 === 0 && num % 7 === 0) {
    return "PlangPlong";
  } else {
    return num;
  }
}

console.log(toRainLanguage(35)); // PlangPlong
console.log(toRainLanguage(21)); // PlingPlong
console.log(toRainLanguage(15)); // PlingPlang

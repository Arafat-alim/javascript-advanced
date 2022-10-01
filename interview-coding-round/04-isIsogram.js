//! If i found any repeition of letters then return false otherwise return true

const str1 = "Ettyide";
const str2 = "goku";

function isIsogram(string) {
  const lowerStr = string.toLowerCase();
  const result = lowerStr.split("").every(
    (letter, index) =>
      // console.log(letter, index) || lowerStr.indexOf(letter) === index
      lowerStr.indexOf(letter) === index
  );
  return result;
}
console.log(isIsogram(str1)); //false
console.log(isIsogram(str2)); //true

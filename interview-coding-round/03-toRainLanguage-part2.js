function toRainLanguage(num) {
  let store = "";
  if (3 % num) store += "pling";
  if (5 % num) store += "plang";
  if (7 % num) store += "plong";

  return store || num;
}

console.log(toRainLanguage(1));

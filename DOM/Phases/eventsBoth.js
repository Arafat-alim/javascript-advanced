let array = document.querySelectorAll("*");
console.log(array);

for (let item of array) {
  item.addEventListener("click", () => alert(`Bubbling: ${item.tagName} `));
  item.addEventListener(
    "click",
    () => alert(`Capturing: ${item.tagName}`),
    true
  );
}

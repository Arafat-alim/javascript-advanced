// ! Styling Elements
const heading = document.querySelector("#heading");
console.log("YOur heading", heading);

heading.style.color = "red";

// ! Multiple item styling
const lists = document.querySelectorAll(".list-items");
console.log(lists);
//! We can use For loop for each item to assign a css property
for (let i = 0; i < lists.length; i++) {
  lists[i].style.fontSize = "2rem";
}

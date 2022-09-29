//! select body
const body = document.querySelector("body");
console.log(body);

const heading = document.createElement("h1");
body.appendChild(heading);
heading.innerText = "Hello World";

//! selecting the ul elements
const el = document.querySelector(".subjects");
console.log(el);
//! First child Element of ul
console.log(el.firstElementChild);
//! last child Element of ul
console.log(el.lastElementChild);

//! Selecting fav-subject
const fav = document.querySelector(".fav-subject");
console.log(fav);

//! Find previous sibling
console.log(fav.previousElementSibling);

//! next sibling
console.log(fav.nextElementSibling);

//! parent element
console.log(fav.parentElement);

//! remove element -- method
heading.remove();

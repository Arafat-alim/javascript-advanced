//! Traversing to parent
// console.log(ul.parentNode); //container
// console.log(ul.parentNode.parentNode); //body
// console.log(ul.parentElement); //container
// console.log(ul.parentElement.parentElement); //body

//! parentNode.parentNode vs parentElement.parentElement
// const html = document.querySelector("html");
// const html = document.documentElement;
// console.log(html);
// console.log(html.parentNode); //#document
// console.log(html.parentElement); //null
// console.log(ul);

// ! Child Node Traversal

// console.log((ul.childNodes[1].style.color = "red"));
// console.log(ul.childNodes); //nodelist 11
// console.log(ul.firstChild); //#text
// console.log(ul.lastChild); //#text

// ! Use this instead of above
// console.log(ul.children); //HTMLCollection(5) [li.list-items, li.list-items, li.list-items, li.list-items, li.list-items]
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);

//! Sibling Traversal
let ul = document.querySelector("ul");
let div = document.querySelector("div");
console.log(div.childNodes); //NodeList(5) [ #text, h1#heading, #text, ul, #text ]
console.log(ul.previousSibling); //#text
console.log(ul.nextSibling); //#text

console.log(ul.previousElementSibling); //<h1 id="heading">
console.log(ul.nextElementSibling); //null

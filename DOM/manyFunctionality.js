const ul = document.querySelector("ul");

//! Create an element
const li = document.createElement("li");

//! Append the element

ul.append(li);

// ! Diffeence between innerHTML, textContent, innerText
//! Select first li element
// const firstLi = document.querySelector(".list-items");
// console.log(firstLi);
// console.log(firstLi.innerHTML);
// console.log(firstLi.textContent);
// console.log(firstLi.innerText);

// Modifying the text
li.innerText = "Goku";
console.log(li);

console.log(ul);

// ! Modifying Attributes

const heading = document.querySelector("#heading");
heading.setAttribute("id", "colorRed");
heading.removeAttribute("id");

heading.getAttribute("id");
console.log(heading);

// ! add a paragraph
const para = document.createElement("p");
para.innerText = "Welcome to the world of DOM";
// para.classList.add("red");
para.setAttribute("name", "paragraph");
para.setAttribute("id", "colorRed");
para.setAttribute("class", "colorBlue");
para.classList.remove("colorBlue");
//! Checked whether the class attribute is prsent or not
console.log(para.classList.contains("colorBlue")); //false
ul.append(para);
para.remove();
console.log(ul);

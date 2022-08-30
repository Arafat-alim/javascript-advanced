function myFun() {
  alert("I love JS");
}
//Syntax
// Element.addEventListener("event", function);

//! Selecting box 2's btn
const btnTwo = document.querySelector(".btn-2");

function clicking() {
  alert("I also love JS");
}

btnTwo.addEventListener("click", clicking);

//! Selecting box 3 and bgColor to it
const boxThree = document.querySelector(".box-3");
function changeBgColor() {
  boxThree.style.backgroundColor = "red";
  boxThree.style.cursor = "pointer";
}

boxThree.addEventListener("mouseover", changeBgColor);

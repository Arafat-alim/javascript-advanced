//!  Capturing Phase + bubbling phase
window.addEventListener(
  "click",
  function () {
    console.log("Window Clicked");
  },
  false
);

document.addEventListener(
  "click",
  function () {
    console.log("Document clicked");
  },
  false
);

document.querySelector(".div1").addEventListener(
  "click",
  function () {
    console.log("DIV1 Clicked");
  },
  false
);

document.querySelector(".div2").addEventListener(
  "click",
  function (e) {
    // e.stopPropagation();
    console.log("DIV2 is clicked");
  },
  false
);

document.querySelector("#button").addEventListener(
  "click",
  function (e) {
    console.log(e.target);
  },
  false
);

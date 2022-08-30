//! button selecting
const btn = document.querySelector(".reveal");
const hidden = document.querySelector(".hidden-content");

function toggleBtn() {
  if (hidden.classList.contains("hidden-content")) {
    hidden.classList.remove("hidden-content");
    hidden.classList.add("reveal");
    btn.innerText = "Hide";
  } else {
    hidden.classList.add("hidden-content");
    hidden.classList.remove("reveal");
    btn.innerText = "Reveal More";
  }
}
console.log(hidden);
btn.addEventListener("click", toggleBtn);

function selectItem(currEl) {
  //! Selecting an element
  const el = document.getElementsByClassName("menu-item");
  for (let i = 0; i < el.length; i++) {
    el[i].classList.remove("active");
  }

  //   event.target.classList.add("active");
  currEl.classList.add("active");
}

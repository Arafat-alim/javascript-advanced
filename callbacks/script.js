function attachFuncttion() {
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", function () {
    console.log("CLicked me", ++count);
  });
}

attachFuncttion();

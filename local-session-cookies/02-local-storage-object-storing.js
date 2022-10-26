//! Local storage object is the browser api helps us to store the data (key,value) in the  in the browser as a string.

const user = {
  name: "Arafat",
};

//! setting up the data in the browser
localStorage.setItem("user", JSON.stringify(user));

//! Fetching the data from the browser
JSON.parse(localStorage.getItem("user"));

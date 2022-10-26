//! local Storage object is a browser api that helps us to store the data in the browser as a string

function setLocalStorageData(key, value) {
  return localStorage.setItem(key, JSON.stringify(value));
}

function getLocalStorageData(key) {
  return JSON.parse(localStorage.getItem(key));
}

//! executing the function
const user = { name: "Arafat" };

setLocalStorageData("user", user);

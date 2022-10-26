//! The localStorage object allows you to save key/value pairs in the browser as a string
//! Our data stored in the window object global object
//! Higher storage value than the sesssion and cookies storage
//! it is used for storing user data, which data is not relevant to fetch from server , it helps in performance

//! syntax
//! setting the data into the browser
//! window.localStorage.setItem("key", "value");
localStorage.setItem("key", "value");

//! getting/fetching the data
window.localStorage("key");

//! deleting the particular key
window.localStorage.removeItem("key");

//! clear the local storage
window.localStorage.clear();

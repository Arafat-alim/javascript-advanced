//! Why we use Promise?
//! We use promise to connect our frontend with backend
//! It has three states - 1. Pending , 2. Resolved, 3. Rejected

// creating a api calls
function getData() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => console.log(data));
}

getData();
//Array(100) [ {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, … ]

//! DOM Manipulation

// selected by getElementById
const heading = document.getElementById("heading");
console.log(heading);

// selected by getElementsByClassName
const listItems = document.getElementsByClassName("list-items");
console.log(listItems); //HTMLCollection { 0: li.list-items, 1: li.list-items, 2: li.list-items, 3: li.list-items, 4: li.list-items, length: 5 }

// selected by getElementsByTagName
const li = document.getElementsByTagName("li");
console.log(li); //HTMLCollection { 0: li.list-items, 1: li.list-items, 2: li.list-items, 3: li.list-items, 4: li.list-items, length: 5 }

// selected by querySelector
const div = document.querySelector("div");
console.log(div); //<div class="container">

// selected by querySelectorAll
//const div = document.querySelectorAll("div");
//console.log(div); //NodeList [ div.container, div.container ]

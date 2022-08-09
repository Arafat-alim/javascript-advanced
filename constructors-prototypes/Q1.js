"use strict";

function bike() {
  console.log(this.name);
}

let obj = {
  name: "yamaha",
  print: bike,
};

obj.print(); //yamaha

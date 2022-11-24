//! "this" keyword - it refers to the current object on which a function it is called. and hence it is defined by the execution context
console.log(this); // ! window object

function myFun() {
  console.log(this); //! window object
}

//! as we know this is defined by the execution context

//! it values can be affected by strict mode and bind method

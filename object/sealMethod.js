const operatingSystem = {
  name: "Ubuntu",
  version: "18.07.02",
};

// ! Sealing the object
const sealed = Object.seal(operatingSystem);
// const sealed = operatingSystem;

//! We cant add any property or method
sealed.myFun = function () {
  console.log("Good Morning");
};

sealed.isUpdate = true;

// ! WE can modify or update the object
sealed.name = "Windows";
sealed.version = "!0";

console.log(sealed); //{ name: 'Windows', version: '!0' }

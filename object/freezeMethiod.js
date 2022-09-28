const user = {
  name: "Arafat",
  role: "devloper",
};

const admin = Object.freeze(user);
// const admin = user;

// ! Trying to update the data
admin.name = "Aquib";
(admin.role = "IT"),
  //! Adding new properties
  (admin.password = 123456);

console.log(admin); //{ name: 'Arafat', role: 'devloper' }

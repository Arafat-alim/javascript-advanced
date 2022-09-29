//! Here we facing the problem

const fetchUser = (username) => {
  setTimeout(() => {
    return { user: username };
  }, 5000);
};

const user = fetchUser("Mohan");
console.log(user); //undefined

//! Here we are facing the issue

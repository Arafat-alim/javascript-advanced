//! WE can deal the asynchronous code using  callback, promise , async/await
//! Callback

const fetchUser = (username, callback) => {
  console.log("fetching ....");
  setTimeout(() => {
    console.log(`Fetched username is - ${username}`);
    callback({ user: username });
  }, 3000);
};

fetchUser("Arafat", (user) => {
  console.log(`Welcome ${user.user}`); //Welcome Arafat
});

//! Output
// fetching...
// Fetched username is Arafat
// Welcome Arafat

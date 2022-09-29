//! WE can deal the asynchronous code using  callback, promise , async/await
//! Callback

const fetchUser = (username, callback) => {
  setTimeout(() => {
    callback({ user: username });
  }, 3000);
};

fetchUser("Arafat", (user) => {
  console.log(`Welcome ${user.user}`); //Welcome Arafat
});

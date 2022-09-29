// ! Wrtiting the dependent code of Promise

const fetchUser = (username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ username });
    }, 3000);
  });
};

const fetchPhotos = (username) => {
  return new Promise((reolve, reject) => {
    setTimeout(() => {
      console.log(`We have the ${username}`);
      reolve(["Photo 1 ", "Photo 2"]);
    }, 2000);
  });
};

const fetchDetails = (photo) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Now we have the ${photo}`);
      resolve("Details...");
    }, 3121);
  });
};

// ! Calling the function
fetchUser("Arafat")
  .then((user) => fetchPhotos(user.username))
  .then((photos) => fetchDetails(photos[0]))
  .then((details) => console.log(`Your Photo details are - ${details}`));

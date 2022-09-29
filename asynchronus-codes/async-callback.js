//! Callback code

//! Fetching user
const fetchUser = (username, callback) => {
  console.log("Fetching...");
  setTimeout(() => {
    console.log(`Fetched user is ${username}`);
    callback({ user: username });
  }, 3000);
};

// fetching photos
const fetchedPhoto = (username, callback) => {
  console.log(`Fetching photos of ${username}`);
  setTimeout(() => {
    callback(["Photo1", "Photo2"]);
  }, 2159);
};

//Fetching photo details
const fetchingDetails = (photo, callback) => {
  setTimeout(() => {
    console.log(`Fetching ${photo}'s Details`);
    callback("Details");
  }, 3000);
};

//! calling the function
fetchUser("Arafat", (userObj) => {
  console.log(`Welcome ${userObj.user}`);
  fetchedPhoto(userObj.user, (photo) => {
    console.log(`Your Photos are ${photo}`);
    fetchingDetails(photo[0], (details) => {
      console.log(`Photo details are ${details}`);
    });
  });
});

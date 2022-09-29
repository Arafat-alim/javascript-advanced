//?! Async and await helps more flexible or great syntactic sugar for handling asyncrhonous code

const fetchUser = (username) => {
  return new Promise((res, rej) => {
    console.log("Fetching");
    setTimeout(() => {
      res({ username });
    }, 3000);
  });
};

const fetchPhotos = (usernmae) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log(`fetching photos of ${usernmae}`);
      res(["Photo 1", "Photo 2"]);
    }, 3121);
  });
};

const fetchDetails = (photo) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log(`Fetching ${photo}'s Details`);
      res("Details");
    }, 2000);
  });
};

//! creating a function to display the promise
const displayPromise = async () => {
  const user = await fetchUser("Arafat");
  const photos = await fetchPhotos(user.username);
  const details = await fetchDetails(photos[0]);

  console.log(`THe fetching photo details are - ${details}`);
};

displayPromise();

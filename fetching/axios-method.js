//! Fetching api using axios

const getData = async () => {
  try {
    const data = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};

getData();

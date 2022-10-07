//! Fetching the data using async/await, try/catch and fetch method
const fetchingApi = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    document.write(`Titles : ${data.map((item) => item.title)}`);
  } catch (e) {
    console.log(e);
  }
};

fetchingApi();

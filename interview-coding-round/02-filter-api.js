//! Filter out the data - email and names whose starts with "k"

async function getUser() {
  try {
    const api = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(api);
    const data = await response.json();
    const result = data
      .filter((item) => item.name.toLowerCase().includes("k"))
      //   .map(({ name, email }) => ({ name, email }));
      .map((v) => ({ name: v.name, email: v.email }));
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}

getUser();

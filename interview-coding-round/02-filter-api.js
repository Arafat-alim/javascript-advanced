//! Filter out the data - email and names whose starts with "k"

async function getUser() {
  const api = "https://jsonplaceholder.typicode.com/users";
  const response = await fetch(api);
  const data = await response.json();
  const result = data
    .filter((item) => item.name.toLowerCase().includes("k"))
    .map(({ name, email }) => ({ name, email }));
  console.log(result);
}

getUser();

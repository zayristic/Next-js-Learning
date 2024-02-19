export async function getAllPosts() {
  const data = fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((json) => {
      return json;
    });
  console.log('Before 5 sec timer');
  await wait(5000);
  console.log('After 5 sec timer');
  return data;
}

export async function wait(ms) {
  return new Promise((resolve, reject) => setTimeout(resolve, ms));
}

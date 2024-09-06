// Fetch API

// This method doesn't wait for API Request completition
// fetch("https://jsonplaceholder.typicode.com/todos/5")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// This method will wait until request completed

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/7");
  const data = await res.json();
  console.log(data);
  return data;
}

const todos = getTodos();
todos;

console.log("Hello world");

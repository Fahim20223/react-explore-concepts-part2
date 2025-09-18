import "./App.css";
import Counter from "./Counter";
import Batsman from "./Batsman";
import Baller from "./Baller";
import Users from "./Users";
import { Suspense } from "react";
import Friends from "./Friends";
import Posts from "./Posts";
import Players from "./Players";

// const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
//   (res) => res.json()
// );
// const fetchFriends = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   return res.json();
// };

// const fetchPosts = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   return res.json();
// };

function App() {
  // const postsPromise = fetchPosts();
  // const friendsPromise = fetchFriends();
  function handleClick() {
    alert("I am clicked");
  }
  const handleClick3 = () => {
    alert("clicked 3");
  };
  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  };
  return (
    <>
      <h3>Vite + React</h3>
      <Players></Players>
      {/* <Suspense fallback={<h4>Posts are coming...</h4>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense> */}

      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}
      {/* <Suspense fallback={<h3>Friends are coming for treat...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense> */}

      <Baller></Baller>
      <Batsman></Batsman>
      <Counter></Counter>
      {/* <button onclick="handleClick()">Click Me</button> */}
      <button onClick={handleClick}>Click Me</button>
      <button
        onClick={function handleClick2() {
          alert("clicked 2");
        }}
      >
        Click Me
      </button>
      <button onClick={handleClick3}>Click me </button>
      <button onClick={() => alert("click 4")}>Click me 4</button>
      <button onClick={() => handleAdd5(10)}>Add 5</button>
    </>
  );
}

export default App;

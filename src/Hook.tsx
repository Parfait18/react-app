import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const [user, setUser] = useState({
    firstname: "John",
    lastname: "Doe",
    age: 26,
  });

  const increment = () => {
    setCount(count + 1);
  };

  const addAge = () => {
    setUser({ ...user, age: user.age + 1 });
  };
  return (
    <>
      <div className="p-4">
        <p> Compteur : {count}</p>
        <button
          onClick={increment}
          className="text-white w-400 bg-blue-700 py-2 px-4 m-4 rounded-md"
        >
          Add
        </button>

        <p>
          {" "}
          {user.firstname} a : {user.age}
        </p>
        <button
          onClick={addAge}
          className="text-white w-400 bg-blue-700 py-2 px-4 m-4 rounded-md"
        >
          Gagner en année
        </button>
      </div>
    </>
  );
}

export default App;

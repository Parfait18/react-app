import { useState } from "react";
import "./App.css";

function App() {
  const [firstname, setFirstname] = useState("John doe");
  const handleChange = (e) => {
    setFirstname(e.target.value);
  };
  const reset = () => {
    setFirstname("");
  };
  return (
    <>
      <div className="p-4">
        <form>
          <label> Veuillez entrez votre prénom</label>
          <br />
          <input
            onChange={handleChange}
            name="firstname"
            className="rounded-md"
            type="text"
            value={firstname}
          />
          <br />
          <h4> Mon nom est : {firstname} </h4>

          <button
            type="button"
            className="text-white w-400 bg-blue-700 py-2 px-4 m-4 rounded-md"
            onClick={reset}
          >
            Clear
          </button>
        </form>
      </div>
    </>
  );
}

export default App;

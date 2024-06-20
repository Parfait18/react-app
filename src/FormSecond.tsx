import { useState } from "react";
import "./App.css";

function App() {
  const [firstname, setFirstname] = useState("John doe");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(new FormData(e.target));
    // setFirstname("")
  };
  const [confirm, setConfirm] = useState(false);

  const toggleCheck = () => {
    setConfirm(!confirm);
  };
  return (
    <>
      <div className="p-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className=""> Veuillez entrez votre prénom</label>
          <br />
          <input
            name="firstname"
            className="rounded-md"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            type="text"
          />
          <br />
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="bg-slate-50 rounded-md"
          />
          <br />
          <span className="m-4">Acceptez les condiions d'utilisations</span>
          <input
            type="checkbox"
            checked={confirm}
            onChange={toggleCheck}
            className="bg-slate-50 rounded-md"
          />
          <br />
          <button
            disabled={!confirm}
            className="text-white w-400 bg-blue-700 py-2 px-4 m-4 rounded-md"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
}

export default App;

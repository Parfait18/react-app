import { useState } from "react";
import "./App.css";

function App() {
  const [isTermAccepted, setIsTermAccepted] = useState(false);
  return (
    <>
      <div className="p-4">
        <form>
          <CGUCheckBox checked={isTermAccepted} onCheck={setIsTermAccepted} />
          <button
            disabled={!isTermAccepted}
            className="text-white w-400 bg-blue-700 py-2 px-4 m-4 rounded-md"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
}

function CGUCheckBox({ checked, onCheck }) {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          className="p-2 m-2 rounded-sm"
          onChange={(e) => onCheck(e.target.value)}
          checked={checked}
        />
        Accepter les conditions d'utilisations
      </label>
    </div>
  );
}

export default App;

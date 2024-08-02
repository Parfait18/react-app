import { useState } from "react";
import Input from "./components/forms/Input";
import { useIncrement } from "./hooks/useIncrement";
import { useToggle } from "./hooks/useToggle";
import { useDocumentTitle } from "./hooks/useDocumentTitle";

function CustomHook() {
  const [checked, toggleCheck] = useToggle();
  const { count, increment, decrement } = useIncrement({
    base: 0,
    min: 1,
    max: 20,
  });

  const [title, setTitle] = useState("");
  useDocumentTitle(title ? "Editer " + title : null);
  return (
    <>
      <h4>Hook personnalisé !</h4>
      <Input
        name={"title"}
        label={"Title"}
        placeholder={"title"}
        value={title}
        onChange={setTitle}
      />
      <input type="checkbox" checked={checked} onChange={toggleCheck} />
      <span className="m-2">{checked && "I'm checked"}</span>

      <h2> Counter : {count} </h2>
      <button
        type="button"
        className="text-white w-400 bg-blue-700 py-2 px-4 m-4 rounded-md"
        onClick={increment}
      >
        Increment
      </button>

      <button
        type="button"
        className="text-white w-400 bg-blue-700 py-2 px-4 m-4 rounded-md"
        onClick={decrement}
      >
        Decrement
      </button>
    </>
  );
}

export default CustomHook;

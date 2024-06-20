import { useEffect, useState } from "react";
import "./App.css";
import Checkbox from "./forms/Checkbox";
import Input from "./forms/Input";

export function EditTitle() {
  const [title, setTitle] = useState("");
  const [firstname, setFirstname] = useState("");
  const [postionY, setPostionY] = useState(0);

  useEffect(() => {
    const originalTite = document.title;
    return () => {
      document.title = originalTite;
    };
  });
  useEffect(() => {
    document.title = title;
  }, [title]);

  // useEffect(() => {
  //   console.log("On mounted");

  //   const handler = () => {
  //     console.log("On scroll");
  //     setPostionY(window.scrollY);
  //   };
  //   window.addEventListener("scroll", handler);
  //   return () => {
  //     window.removeEventListener("scroll", handler);
  //   };
  // }, []);

  return (
    <div className="w-400">
      <Input
        name={""}
        label={"Title"}
        placeholder={"Edit title"}
        value={title}
        onChange={setTitle}
      />
      <Input
        name={""}
        label={"Firstname"}
        placeholder={"Edit firstname"}
        value={firstname}
        onChange={setFirstname}
      />
      <div style={{ height: "300vh" }}> {postionY}</div>
    </div>
  );
}

function App() {
  const [showInput, setShowInput] = useState(true);
  return (
    <div className="p-4">
      <Checkbox
        label={"Afficher l'input"}
        checked={showInput}
        id={"showInput"}
        onChange={setShowInput}
      />
      {showInput && <EditTitle />}
    </div>
  );
}

export default App;

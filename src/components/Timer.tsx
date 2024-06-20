import { useEffect, useState } from "react";
import Input from "./forms/Input";

export function Timer() {
  const [duration, setDuration] = useState(5);
  const [secontLeft, setSecontLeft] = useState(duration);

  const handleChange = (v: number) => {
    setDuration(v);
    setSecontLeft(v);
  };
  useEffect(() => {
    handleChange(duration);
    const timer = setInterval(() => {
      setSecontLeft((v) => {
        if (v <= 1) {
          clearInterval(timer);
          return 0;
        }
        return v - 1;
      });
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [duration]);

  return (
    <div className="w-400">
      <Input
        name={"Duration"}
        label={"Duration"}
        placeholder={"Edit Duration"}
        value={duration}
        type={"number"}
        onChange={setDuration}
      />

      <div style={{ height: "300vh" }}> Counter : {secontLeft}</div>
    </div>
  );
}

import { useEffect, useMemo, useRef, useState } from "react";
import { Input } from "./forms/CustomInput";

function Paragraph() {
  const prefixRef = useRef("");
  // const prefixRef = useMemo(() => ({
  //   current: null,
  // }));
  const [prefix, setPrefix] = useState("");
  prefixRef.current = prefix;
  const ref = useRef();

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("[prefix]", prefixRef.current);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [prefix]);

  return (
    <div className="bg-gray-100 m-2 p-2 ">
      <Input
        ref={ref}
        type="text"
        value={prefix}
        onChange={setPrefix}
        name={"prefix"}
        label={"Prefix"}
        placeholder={"Prefix"}
      />
      lorem lor Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
      minus nisi consectetur nemo cumque cupiditate, quibusdam, neque voluptate
      hic tempore recusandae. Aperiam doloribus voluptatem quisquam minus,
      consequuntur harum ut necessitatibus!
    </div>
  );
}

export default Paragraph;

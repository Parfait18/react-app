/*
@Param {string} label - The label
@Param {any} value - The value
@Param {string} placeholder - The placeholder
@Param {(s: string) => void} onChange - The onChange callback
*/

import { useId } from "react";

interface InpuInterface {
  name: string;
  label: string;
  placeholder: string;
  value: number | string | string[];
  onChange: (s) => void;
  type?: string;
  inputRef?;
}
function Input({
  name,
  label,
  placeholder,
  value,
  onChange,
  type,
  inputRef,
}: InpuInterface) {
  const id = useId();
  console.log("ref ==>", inputRef?.current);
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        ref={inputRef}
        name={name}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={id}
        type={type ? type : "text"}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default Input;

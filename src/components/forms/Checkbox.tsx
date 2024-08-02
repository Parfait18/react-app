/*
@Param {string} label - The label
@Param {(s: string) => void} onChange - The onChange
@Parm {boolean} checked - Whether the label is checked
*/

interface CheckboxInterface {
  label: string;
  checked: boolean;
  id: string;
  onChange: (s) => void;
}
function Checkbox({ id, label, checked, onChange }: CheckboxInterface) {
  return (
    <div className=" mb-6">
      <div className="md:w-1/3"></div>
      <label htmlFor={id} className="md:w-2/3 block text-gray-500 font-medium">
        <input
          className="mr-2 leading-tight rounded-sm focus:outline-none  focus:border-blue-50"
          type="checkbox"
          id={id}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <span className="text-sm">{label}</span>
      </label>
    </div>
  );
}

export default Checkbox;

import React from "react";
import "@styles/css/input.css";

type CheckboxProps = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <label className="checkbox">
      <input type="checkbox" checked={checked} onChange={handleChange} />
      <span>{label}</span>
    </label>
  );
};

export default Checkbox;

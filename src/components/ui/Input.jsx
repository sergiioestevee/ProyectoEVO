// src/components/ui/Input.jsx

import React from "react";

const Input = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  required = false,
  className = "",
}) => {
  return (
    <div className={`input-group ${className}`}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default Input;

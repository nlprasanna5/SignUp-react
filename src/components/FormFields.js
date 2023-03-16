import React from "react";
import './registerStyle.css';

function InputField({ label, id, name, value, onChange, inputRef, type = "text" }) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        ref={inputRef} className="content"
      />
    </div>
  );
}

export default InputField;

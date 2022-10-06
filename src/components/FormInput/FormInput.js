import React, { useState } from 'react';
import './FormInput.css';

const FormInput = ({
  type,
  name,
  mod,
  labelText,
  minLength,
  maxLength,
  placeholder,
}) => {
  const [value, setValue] = useState({});

  function handleInputValue(e) {
    setValue({ ...value, [e.target.name]: e.target.value });
  }

  return (
    <label>
      <p className={`auth__label auth__label-name_${mod}`}>{labelText}</p>
      <input
        type={type}
        name={name}
        className={`auth__input auth__input_type_${mod}`}
        required
        minLength={minLength}
        maxLength={maxLength}
        placeholder={placeholder}
        value={value[name] || ''}
        onChange={handleInputValue}
      />
    </label>
  );
};

export default FormInput;

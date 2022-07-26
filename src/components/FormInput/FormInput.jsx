import React, { useState } from 'react';
import './FormInput.css';
import { isEmail } from 'validator';
import { NAME_REGEXP } from '../../utils/constants';

const FormInput = ({
  type,
  name,
  mod,
  labelText,
  minLength,
  maxLength,
  placeholder,
  onUserData,
  inputDisabled,
}) => {
  const [inputValid, setInputValid] = useState(true);
  const [value, setValue] = useState({});

  function handleInputValue(evt) {
    setValue({ ...value, [evt.target.name]: evt.target.value });
    if (evt.target.type === 'email' && isEmail(evt.target.value)) {
      setInputValid(true);
      onUserData(evt.target.name, evt.target.value);
    } else if (evt.target.type !== 'email' && evt.target.checkValidity()) {
      setInputValid(true);
      onUserData(evt.target.name, evt.target.value);
    } else {
      setInputValid(false);
    }
  }

  return (
    <label>
      <p className={`auth__label auth__label-name_${mod}`}>{labelText}</p>
      <input
        type={type}
        name={name}
        className={`auth__input auth__input_${
          inputValid ? '' : 'error'
        } auth__input_type_${mod}`}
        required
        minLength={minLength}
        maxLength={maxLength}
        placeholder={placeholder}
        value={value[name] || ''}
        onChange={handleInputValue}
        disabled={inputDisabled}
        pattern={name === 'username' ? NAME_REGEXP : null}
      />
    </label>
  );
};

export default FormInput;

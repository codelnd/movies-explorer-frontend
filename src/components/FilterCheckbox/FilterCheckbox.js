import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <label className="checkbox__label">
      <input type="checkbox" className="input_type_checkbox" />
      <div className="checkbox"></div>
      Короткометражки
    </label>
  );
}

export default FilterCheckbox;

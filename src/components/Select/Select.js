import React from "react";
import './style.css';

/** Компонент Select */
const Select = ({
  onClick,
  option,
  options
}) => {
  const renOpt = options.map(
    el => <option value={el}>{el}</option>
  )

  return (
    <select>
      {renOpt}
    </select>
  )
};

export default Select;
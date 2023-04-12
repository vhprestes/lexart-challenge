import React from 'react';
import SelectProps from '../Interfaces/SelectProps';



const Select: React.FC<SelectProps> = ({ items }) => {
  return (
    <select>
      {items.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default Select;
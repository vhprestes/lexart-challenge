import React from 'react';
import ButtonProps from '../Interfaces/ButtonProps';


const Button: React.FC<ButtonProps> = ({ isSearch, onClick, link }) => {

  const handleLinkClick = () => {
    if (link) {
      window.location.href = link;
    }
  };

  if (isSearch) {
    return <button onClick={onClick}>Search</button>;
  } else {
    return <button onClick={handleLinkClick}>Ir a web</button>;
  }
};

export default Button;
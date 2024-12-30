import React from 'react';
import './Card1.css';

const Card1 = ({ text, style, className }) => {
  return (
    <div className={`card1 ${className}`} style={style}>
      {text}
    </div>
  );
};

export default Card1;

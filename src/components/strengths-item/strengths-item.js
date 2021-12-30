import React from 'react';

import './strengths-item.css';


const StrengthsItem = ({ icon, text, selected }) => {
  return (
    <li className="strengths-item">
      <div className="strengths-item__icon" style={{ backgroundColor: selected ? '#fff' : '#2041C8' }}>
        <img src={icon} alt="icon"/>
      </div>
      <span className="strengths-item__text">{text}</span>
    </li>
  );
};

export default StrengthsItem;
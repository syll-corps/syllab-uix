import React from 'react';

import './strengths-item.scss';


const StrengthsItem = ({ icon, text }) => {
  return (
    <li className="strengths-item">
      <div className="strengths-item__icon">
        {icon}
      </div>
      <span className="strengths-item__text">{text}</span>
    </li>
  );
};

export default StrengthsItem;
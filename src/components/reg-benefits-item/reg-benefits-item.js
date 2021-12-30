import React from 'react';

import './reg-benefits-item.css';
import ItemIcon from '../../assets/icons/reg-benefits/mark-icon.svg';


const RegBenefitsItem = ({ text }) => {
  return (
    <li className="reg-benefits-item">
      <div className="reg-benefits-item__icon">
        <img src={ItemIcon} alt="mark icon"/>
      </div>
      <div className="reg-benefits-item__text">
        <p>{text}</p>
      </div>
    </li>
  );
};

export default RegBenefitsItem;
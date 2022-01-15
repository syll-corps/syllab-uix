import React from 'react';
import { FiCheckCircle } from 'react-icons/all';

import './reg-benefits-item.scss';


const RegBenefitsItem = ({ text }) => {
  return (
    <li className="reg-benefits-item">
      <div className="reg-benefits-item__icon">
        <FiCheckCircle/>
      </div>
      <div className="reg-benefits-item__text">
        <p>{text}</p>
      </div>
    </li>
  );
};

export default RegBenefitsItem;
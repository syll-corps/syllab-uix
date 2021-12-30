import React, { useMemo } from 'react';
import { v4 } from 'uuid';

import RegBenefitsItem from "../reg-benefits-item";

import './reg-benefits.css';


const RegBenefits = ({ items }) => {

  const renderedItems = useMemo(() => (
    items.map(item => <RegBenefitsItem text={item} key={v4()}/>)
  ), [items]);

  return (
    <div className="reg-benefits">
      <div className="container">
        <h2 className="reg-benefits__title">Преимущества регистрации</h2>
        <ul className="reg-benefits__list">
          {renderedItems}
        </ul>
      </div>
    </div>
  );
};

export default RegBenefits;
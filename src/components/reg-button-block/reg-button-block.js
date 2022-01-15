import React from 'react';
import { NavLink } from "react-router-dom";

import './reg-button-block.scss';


const RegButtonBlock = () => {
  return (
    <div className="reg-button-block">
      <div className="container">
        <div className="reg-button-block__container">
            <NavLink to={'/auth/sign-up'}>
              <button className="reg-button-block__button">
                Зарегистрироваться
              </button>
            </NavLink>
          <NavLink to={'/schedule/group'} className="reg-button-block__link">
            Продолжить без регистрации
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default RegButtonBlock;
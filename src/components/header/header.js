import React from 'react';
import { NavLink } from "react-router-dom";

import { NavMenuContainer } from "../containers";

import './header.css';


const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <NavLink to="/" className="header__main-page-link">
            <div className="header__company-logo"/>
            <h2 className="header__company-name">T-Syllab</h2>
          </NavLink>
          <NavMenuContainer/>
        </div>
      </div>
    </header>
  );
};

export default Header;
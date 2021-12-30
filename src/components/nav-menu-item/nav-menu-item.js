import React from 'react';
import { NavLink } from "react-router-dom";

import './nav-menu-item.css';


const NavMenuItem = ({ to, text, handleClick }) => {
  return (
    <li className="nav-menu-item">
      <NavLink to={to} onClick={handleClick}>
        <span className="nav-menu-item__text">{text}</span>
      </NavLink>
    </li>
  );
};

export default NavMenuItem;
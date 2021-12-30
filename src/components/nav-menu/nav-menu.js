import React, { useMemo, useCallback, useState, useEffect } from 'react';
import { v4 } from 'uuid';

import NavMenuItem from "../nav-menu-item";
import {
  toggleActiveClass,
  blockClick,
  delayActionDelegate,
  getCssPropValue,
  secToMilliSec
} from "../../utils";
import BurgerMenuIcon from '../../assets/icons/header/burger-menu.svg';
import CancelCloseIcon from '../../assets/icons/header/cancel-close.svg';

import './nav-menu.css';


const NavMenu = ({ links }) => {

  const [isMenuActive, setIsMenuActive] = useState(false);
  const [animationDuration, setAnimationDuration] = useState(null);

  useEffect(() => {
    const duration = getCssPropValue('nav__blur', 'transition-duration');
    setAnimationDuration(secToMilliSec(duration));
  }, []);

  const toggleClasses = useCallback((isMenuActive) => {
    const [nav, navContent, navBlur] = ['nav', 'nav__content', 'nav__blur'];
    delayActionDelegate(() => toggleActiveClass(navBlur), isMenuActive ? null : 0);
    delayActionDelegate(() => toggleActiveClass(navContent), isMenuActive ? null : 0);
    delayActionDelegate(() => toggleActiveClass(nav), isMenuActive ? animationDuration : null);
  }, [animationDuration]);

  const handleClick = useCallback(() => {
    setIsMenuActive(!isMenuActive);
    blockClick('nav__blur', animationDuration);
    toggleClasses(isMenuActive);
  }, [isMenuActive, toggleClasses, animationDuration]);

  const renderedLinks = useMemo(() => (
    links.map(link => <NavMenuItem {...link} handleClick={handleClick} key={v4()}/>)
  ), [links, handleClick]);

  return (
    <div className="nav-menu">
      <button className="nav-menu__burger-button" onClick={handleClick}>
        <img src={BurgerMenuIcon} alt="burger menu icon"/>
      </button>
      <nav className="nav-menu__nav nav">
        <div className="nav__content">
          <div className="nav__top-row">
            <button className="nav__close-button" onClick={handleClick}>
              <img src={CancelCloseIcon} alt="cancel close icon"/>
            </button>
          </div>
          <menu className="nav__menu">
            <ul className="nav__list">{renderedLinks}</ul>
          </menu>
        </div>
        <div className="nav__blur" onClick={handleClick}/>
      </nav>
    </div>
  );
};

export default NavMenu;
import React, { useMemo, useCallback, useState, useEffect } from 'react';
import { IoMdMenu, IoMdClose } from 'react-icons/all';
import { v4 } from 'uuid';

import NavMenuItem from "../nav-menu-item";
import {
  toggleClass,
  blockClick,
  delayActionDelegate,
  getCssPropValue,
  secToMilliSec
} from "../../utils";

import './nav-menu.scss';


const NavMenu = () => {

  const [isMenuActive, setIsMenuActive] = useState(false);
  const [animationDuration, setAnimationDuration] = useState(null);

  useEffect(() => {
    const duration = getCssPropValue('nav__blur', 'transition-duration');
    setAnimationDuration(secToMilliSec(duration));
  }, []);

  const toggleClasses = useCallback((isMenuActive) => {
    const [nav, navContent, navBlur] = ['nav', 'nav__content', 'nav__blur'];
    delayActionDelegate(() => toggleClass(navBlur, 'active'), isMenuActive ? null : 0);
    delayActionDelegate(() => toggleClass(navContent,'active'), isMenuActive ? null : 0);
    delayActionDelegate(() => toggleClass(nav,'active'), isMenuActive ? animationDuration : null);
  }, [animationDuration]);

  const handleClick = useCallback(() => {
    setIsMenuActive(!isMenuActive);
    blockClick('nav__blur', animationDuration);
    toggleClasses(isMenuActive);
  }, [isMenuActive, toggleClasses, animationDuration]);

  const links = useMemo(() => (
    [
      { to: '/schedule/groups', text: 'Расписание' },
      { to: '/info', text: 'Информация' },
      { to: '/help', text: 'Помощь' },
    ]
  ), []);

  const renderedLinks = useMemo(() => (
    links.map(link => <NavMenuItem {...link} handleClick={handleClick} key={v4()}/>)
  ), [links, handleClick]);

  return (
    <div className="nav-menu">
      <button className="nav-menu__burger-button" onClick={handleClick}>
        <IoMdMenu/>
      </button>
      <nav className="nav-menu__nav nav">
        <div className="nav__content">
          <div className="nav__top-row">
            <button className="nav__close-button" onClick={handleClick}>
              <IoMdClose/>
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
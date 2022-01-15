import React, { useState, useLayoutEffect, useCallback } from 'react';
import { SiPug } from "react-icons/all";

import { getCssPropValue, toggleClass, blockClick } from "../../utils";
import Page404Animation from '../../assets/animations/404.gif';

import './page-404.scss';

const Page404 = () => {

  const [height, setHeight] = useState(null);

  useLayoutEffect(() => {
    setHeight(getCssPropValue('header', 'height'));
  }, []);

  const handleClick = useCallback(() => {
    toggleClass('page-404__icon', 'rotate');
    blockClick('page-404__icon', 500);
  }, []);

  return (
    <div className="page-404" style={{ height: `calc(100vh - ${height})` }}>
      <div className="container">
        <div className="page-404__image">
          <img src={Page404Animation} alt="page 404"/>
        </div>
        <div className="page-404__icon" onClick={handleClick}>
          <SiPug/>
        </div>
        <h1 className="page-404__title">Ooops...</h1>
        <p className="page-404__text">
          Дружище, извини, но мы не смогли найти эту страницу&nbsp;:(
        </p>
      </div>
    </div>
  );
};


export default Page404;
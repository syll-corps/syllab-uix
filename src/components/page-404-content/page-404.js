import React, { useState, useEffect } from 'react';

import { getCssPropValue } from "../../utils";

import './page-404.css';
import Page404Animation from '../../assets/animations/404.gif';

const Page404 = () => {

  const [height, setHeight] = useState(null);

  useEffect(() => {
    setHeight(getCssPropValue('header', 'height'))
  }, []);

  return (
    <div className="page-404" style={{ height: `calc(100vh - ${height})` }}>
      <div className="container">
        <div className="page-404__image">
          <img src={Page404Animation} alt="page 404"/>
        </div>
        <h1 className="page-404__title">Ooops...</h1>
        <p className="page-404__text">
          Дружище, извини, но мы не смогли найти эту страницу :(
        </p>
      </div>
    </div>
  );
};


export default Page404;
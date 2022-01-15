import React, { useMemo } from 'react';
import { FiSettings, FiThumbsUp, BsShieldCheck, FiUnlock } from "react-icons/all";
import { v4 } from 'uuid';

import StrengthsItem from "../strengths-item";
import AnimatedHuman from '../../assets/animations/human.gif';

import './site-description.scss';


const SiteDescription = () => {

  const strengths = useMemo(() => (
    [
      { icon: <FiUnlock/>, text: 'Безопасность' },
      { icon: <BsShieldCheck/>, text: 'Достоверность'},
      { icon: <FiThumbsUp/>, text: 'Отзывчивость' },
      { icon: <FiSettings/>, text: 'Гибкость' }
    ]
  ), []);

  const renderedStrengths = useMemo(() => (
    strengths.map(item => <StrengthsItem {...item} key={v4()}/>)
  ), [strengths]);

  return (
    <div className="site-description">
      <div className="container">
        <div className="site-description__container">
          <div className="site-description__left-side">
            <div className="site-description__text">
              <h1 className="site-description__title">Здесь какой-то сочный заголовок</h1>
              <p className="site-description__description">
                Здесть будет краткая инфа о проекте, все что я тут пишу, рыбный текст соответвственно
                с ПП РФ №582 от 10.07.2013 и приказом Федеральной службы по надзору в сфере образования
                и науки (Рособнадзор) №831 от 14.08.2020
              </p>
            </div>
            <ul className="site-description__strengths">
              {renderedStrengths}
            </ul>
          </div>
          <div className="site-description__right-side">
            <img src={AnimatedHuman} alt="animated human"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteDescription;
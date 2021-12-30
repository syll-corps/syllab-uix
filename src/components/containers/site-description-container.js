import React, { useMemo } from 'react';

import SiteDescription from "../site-description";

import SafetyIcon from '../../assets/icons/site-description/safety.svg';
import CredibilityIcon from '../../assets/icons/site-description/credibility.svg';
import ResponsivenessIcon from '../../assets/icons/site-description/responsiveness.svg';
import FlexibilityIcon from '../../assets/icons/site-description/flexibility.svg';


const SiteDescriptionContainer = () => {

  const strengths = useMemo(() => (
    [
      { icon: SafetyIcon, text: 'Безопасность', selected: true },
      { icon: CredibilityIcon, text: 'Достоверность', selected: false },
      { icon: ResponsivenessIcon, text: 'Отзывчивость', selected: false },
      { icon: FlexibilityIcon, text: 'Гибкость', selected: false }
    ]
  ), []);

  return <SiteDescription strengths={strengths}/>
};

export default SiteDescriptionContainer;
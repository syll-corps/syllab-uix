import React, { useMemo } from 'react';

import RegBenefits from "../reg-benefits";


const RegBenefitsContainer = () => {
  const items = useMemo(() => (
    [
      'Информация публикуемая в соответствии с ПП РФ №582 от 10.07.2013 и приказом',
      'Информация публикуемая в соответствии с ПП РФ №582 от 10.07.2013 и приказом',
      'Информация публикуемая в соответствии с ПП РФ №582 от 10.07.2013 и приказом',
      'Информация публикуемая в соответствии с ПП РФ №582 от 10.07.2013 и приказом'
    ]
  ), []);

  return <RegBenefits items={items}/>;
};

export default RegBenefitsContainer;
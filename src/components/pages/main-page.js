import React, { Fragment } from 'react';

import SiteDescription from "../site-description";
import RegBenefits from "../reg-benefits";
import RegButtonBlock from "../reg-button-block";


const MainPage = () => {
  return (
    <Fragment>
      <SiteDescription/>
      <RegBenefits/>
      <RegButtonBlock/>
    </Fragment>
  );
};

export default MainPage;

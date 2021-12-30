import React, { Fragment } from 'react';

import {
  SiteDescriptionContainer,
  RegBenefitsContainer
} from "../containers";
import RegButtonBlock from "../reg-button-block";

const MainPage = () => {
  return (
    <Fragment>
      <SiteDescriptionContainer/>
      <RegBenefitsContainer/>
      <RegButtonBlock/>
    </Fragment>
  );
};

export default MainPage;

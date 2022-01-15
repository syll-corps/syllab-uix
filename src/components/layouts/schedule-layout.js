import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';


const ScheduleLayout = () => {
  console.log(Outlet)
  return (
    <Fragment>
      <Outlet/>
    </Fragment>
  );
};

export default ScheduleLayout;
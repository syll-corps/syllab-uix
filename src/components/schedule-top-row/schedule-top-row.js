import React from 'react';

import ScheduleSearchForm from "../schedule-search-form";
import TeachersRating from "../teachers-rating";

import './schedule-top-row.scss';


const ScheduleTopRow = () => {
  return (
    <div className="schedule-top-row">
      <div className="container">
        <div className="schedule-top-row__container">
          <ScheduleSearchForm/>
          <TeachersRating/>
        </div>
      </div>
    </div>
  );
};

export default ScheduleTopRow;
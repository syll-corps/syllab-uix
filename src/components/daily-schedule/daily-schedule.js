import React, { useMemo } from 'react';
import { v4 } from 'uuid';

import DailyScheduleItem from "../daily-schedule-item";
import { getItemSafely } from "../../utils";

import './daily-schedule.scss';


const DailySchedule = ({ day: { dayOfWeek, date }, dailySchedule }) => {

  const backgroundColors = useMemo(() => (
    ['#F596FF', '#B196FF', '#96BAFF', '#28DF46', '#FF9696', '#FFCF96']
  ), []);

  const renderedItems = useMemo(() => (
    dailySchedule.map((item, idx) => (
      <DailyScheduleItem
        {...item}
        backgroundColor={getItemSafely(backgroundColors, idx)}
        key={v4()}
      />
    ))
  ), [dailySchedule, backgroundColors]);

  return (
    <div className="daily-schedule">
      <div className="daily-schedule__day">
        <span className="daily-schedule__day-of-week">{dayOfWeek}</span>
        <h3 className="daily-schedule__date">{date}</h3>
      </div>
      <ul className="daily-schedule__list">
        {renderedItems}
      </ul>
    </div>
  );
};

export default DailySchedule;
import React, { useMemo } from 'react';
import { v4 } from 'uuid';

import DailySchedule from "../daily-schedule";
import ScheduleCalendar from "../schedule-calendar";
import { schedule } from "../../stub-data";

import './schedule.scss';


const Schedule = () => {

  const renderedSchedule = useMemo(() => (
    schedule.map(dailySchedule => <DailySchedule {...dailySchedule} key={v4()}/>)
  ), []);

  return (
    <div className="schedule">
      <div className="container">
        <div className="schedule__wrapper">
          <h2 className="schedule__title">Расписание занятий</h2>
          <div className="schedule__tip schedule-tip">
            <span className="schedule-tip__default">Обычная пара</span>
            <span className="schedule-tip__distant">Дистанционно</span>
            <span className="schedule-tip__exam">Экзамен</span>
          </div>
          <div className="schedule__container">
            <div className="schedule__left-side">
              <ul className="schedule__list">{renderedSchedule}</ul>
            </div>
            <div className="schedule__right-side">
              <ScheduleCalendar/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
import React from 'react';
import { AiOutlineClockCircle, BsDoorClosed, FiUser } from "react-icons/all";

import './daily-schedule-item.css';


const DailyScheduleItem = ({ subject, time, auditorium, teacher, type }) => {
  return (
    <li className={`daily-schedule-item daily-schedule-item_${type}`}>
      <div className="daily-schedule-item__row">
        <div className="daily-schedule-item__subject">
          <h4>{subject}</h4>
        </div>
      </div>
      <div className="daily-schedule-item__row">
        <div className="daily-schedule-item__info">
          <div className="daily-schedule-item__time">
            <AiOutlineClockCircle/>
            <span>{time}</span>
          </div>
          <div className="daily-schedule-item__auditorium">
            <BsDoorClosed/>
            <span>{auditorium}</span>
          </div>
        </div>
        <div className="daily-schedule-item__teacher">
          <FiUser/>
          <span>{teacher}</span>
        </div>
      </div>
    </li>
  );
};

export default DailyScheduleItem;
import React, { useState, useCallback, useRef, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward, AiOutlineCalendar } from "react-icons/all";
import Calendar from "react-calendar";

import './schedule-calendar.scss';


const ScheduleCalendar = () => {

  const [date, setDate] = useState(new Date());
  const [isVisible, setIsVisible] = useState(false);
  
  const rootEl = useRef(null);

  const hideCalendar = useCallback(() => {
    setIsVisible(false);
  }, []);

  useEffect(() => {
    const onClick = e => rootEl.current.contains(e.target) || hideCalendar();
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  const handleChange = useCallback((value) => {
    setDate(value);
    hideCalendar();
  }, []);

  return (
    <div className="schedule-calendar"  ref={rootEl}>
      <div className="schedule-calendar__btn" onClick={() => setIsVisible(!isVisible)}>
        <AiOutlineCalendar/>
      </div>
      <Calendar
        className={isVisible ? "react-calendar_visible" : ''}
        onChange={handleChange}
        value={date}
        locale={"ru-RU"}
        nextLabel={<IoIosArrowForward/>}
        prevLabel={<IoIosArrowBack/>}
      />
    </div>
  );
};

export default ScheduleCalendar;
import React, { useContext } from 'react';

import { SchedulePagesTextContext } from "../contexts";

import './schedule-input.scss';


const ScheduleInput = ({ register, name }) => {

  const { inputLabel, inputPlaceholder } = useContext(SchedulePagesTextContext);

  return (
    <label className="schedule-input">
      <span className="schedule-input__label">{inputLabel}</span>
      <input
        className="schedule-input__input"
        placeholder={inputPlaceholder}
        {...register(name)}
        autoComplete="off"/>
    </label>
  );
};

export default ScheduleInput;
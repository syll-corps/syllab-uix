import React, { useCallback, useMemo, useContext } from 'react';
import { useForm } from "react-hook-form";

import ScheduleInput from "../schedule-input";
import ScheduleFavouriteItems from "../schedule-favourite-items";
import { SchedulePagesTextContext } from "../contexts";

import './schedule-search-form.scss';


const ScheduleSearchForm = () => {

  const { register, handleSubmit, setValue } = useForm();
  const { formTitle } = useContext(SchedulePagesTextContext);

  const inputName = useMemo(() => 'searchValue', []);

  const onSubmit = useCallback((formObj) => {
    console.log(formObj)
  }, []);

  return (
    <form className="schedule-search-form" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="schedule-search-form__title">{formTitle}</h2>
      <div className="schedule-search-form__row">
        <ScheduleInput register={register} name={inputName}/>
        <ScheduleFavouriteItems setSearchValue={(value) => setValue(inputName, value)}/>
      </div>
      <button className="schedule-search-form__button" type="submit">
        Смотреть расписание
      </button>
    </form>
  );
};

export default ScheduleSearchForm;
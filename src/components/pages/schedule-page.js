import React, { useMemo } from 'react';
import { useLocation } from "react-router-dom";

import { getValueByPath } from "../../utils";
import ScheduleSearchForm from "../schedule-search-form";
import TeachersRating from "../teachers-rating";
import Schedule from "../schedule";
import ScheduleTopRow from '../schedule-top-row';
import { SchedulePagesTextProvider } from "../contexts";


const SchedulePage = () => {

  const pagesText = useMemo(() => (
    {
      groups: {
        formTitle: 'Введите номер группы, чтобы узнать своё расписание',
        inputLabel: 'Введите номер группы',
        inputPlaceholder: 'Например, 221201',
        favItemsTitle: 'Избранные группы'
      },
      teachers: {
        formTitle: 'Введите ФИО преподавателя, чтобы узнать его расписание',
        inputLabel: 'Введите ФИО преподавателя',
        inputPlaceholder: 'Например, Иванов Иван Иванович',
        favItemsTitle: 'Избранные преподаватели'
      },
      auditoriums: {
        formTitle: 'Введите номер аудитории, чтобы узнать расписание',
        inputLabel: 'Введите номер аудитории',
        inputPlaceholder: 'Например, гл-404',
        favItemsTitle: 'Избранные аудитории'
      }
    }
  ), []);

  const { pathname } = useLocation();

  return (
    <SchedulePagesTextProvider value={getValueByPath(pagesText, pathname)}>
      <ScheduleTopRow/>
      <Schedule/>
    </SchedulePagesTextProvider>
  );
};

export default SchedulePage;


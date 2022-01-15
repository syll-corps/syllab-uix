import React, { useMemo } from 'react';
import { v4 } from 'uuid';

import TeachersRatingItem from "../teachers-rating-item";
import { teachersRating } from "../../stub-data";

import './teachers-rating.scss';


const TeachersRating = () => {

  const renderedTeachers = useMemo(() => (
    teachersRating.map(teacher => <TeachersRatingItem {...teacher} key={v4()}/>)
  ), []);

  return (
    <div className="teachers-rating">
      <h2 className="teachers-rating__title">Рейтинг преподавателей</h2>
      <ul className="teachers-rating__list styled-scroll">
        {renderedTeachers}
      </ul>
    </div>
  );
};

export default TeachersRating;
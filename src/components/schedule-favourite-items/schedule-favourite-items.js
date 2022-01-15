import React, { useMemo, useContext } from 'react';
import { useLocation } from "react-router-dom";
import { v4 } from 'uuid';

import { getItemSafely, createColorObj, getValueByPath } from "../../utils";
import { scheduleFavouriteItems } from "../../stub-data";
import { SchedulePagesTextContext } from "../contexts";

import './schedule-favourite-items.scss';


const ScheduleFavouriteItems = ({ setSearchValue }) => {

  const { pathname } = useLocation();
  const { favItemsTitle } = useContext(SchedulePagesTextContext);

  const colors = useMemo(() => (
    [
      createColorObj('#6482DD', '#E3E8FC'),
      createColorObj('#85CBAE', '#DFFEEE'),
      createColorObj('#EEA1B5', '#FDEEF2'),
      createColorObj('#F596FF', '#FDEAFF'),
      createColorObj('#DDB464', 'rgba(221, 180, 100, 0.24)')
    ]
  ), []);

  const renderedItems = useMemo(() => (
     getValueByPath(scheduleFavouriteItems, pathname).map((item, idx) => {
        const { color, backgroundColor } = getItemSafely(colors, idx);
        return (
          <li
            onClick={() => setSearchValue(item)}
            className="schedule-favourite-items__item"
            style={{ color, backgroundColor }}
            key={v4()}
          >
            <p>{item}</p>
          </li>
        )
      })
  ), [colors, setSearchValue]);

  return (
    <div className="schedule-favourite-items">
      <label className="schedule-favourite-items__label">{favItemsTitle}</label>
      <ul className="schedule-favourite-items__list styled-scroll">
        {renderedItems}
      </ul>
    </div>
  );
};

export default ScheduleFavouriteItems;
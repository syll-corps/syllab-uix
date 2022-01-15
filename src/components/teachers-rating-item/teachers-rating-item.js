import React from 'react';
import { FiUser, RiVipCrownLine, FaHeart } from "react-icons/all";

import './teachers-rating-item.scss';


const TeachersRatingItem = ({ fullName, isLeader, likesCount, comment }) => {
  return (
    <div
      className="teachers-rating-item"
      style={{ border: isLeader ? '1px solid #85CBAE' : 'none' }}>
      <div
        className="teachers-rating-item__avatar"
        style={{ backgroundColor: isLeader ? '#85CBAE' : '#E3E8FC' }}>
        <FiUser color={isLeader ? '#fff' : '#000'}/>
      </div>
      <div className="teachers-rating-item__info">
        <div className="teachers-rating-item__row">
          <div className="teachers-rating-item__full-name">
            <p>{fullName}</p>
          </div>
          <div className="teachers-rating-item__crown">
            {isLeader ? <RiVipCrownLine/> : null}
          </div>
        </div>
        <div className="teachers-rating-item__row">
          <p className="teachers-rating-item__comment">{comment}</p>
        </div>
        <div className="teachers-rating-item__row">
          <span className="teachers-rating-item__likes-count">{likesCount}</span>
          <div className="teachers-rating-item__like">
            <FaHeart/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeachersRatingItem;
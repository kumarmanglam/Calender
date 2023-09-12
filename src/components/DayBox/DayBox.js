import React from "react";
import Tooltip from "../Tooltip/Tooltip";

function DayBox({ day, isHoliday, holidayName, holidayDesc, onAdd }) {
  //it is dumb component used for view only.
  return (
    <div className="day">
      <div>{day}</div>
      <Tooltip content={holidayDesc}>
        <div className="holiday">{holidayName}</div>
      </Tooltip>
      <button className="btn-add" onClick={() => onAdd(day)}>
        Add +
      </button>
    </div>
  );
}

export default DayBox;

import React, { useEffect, useState } from "react";
import MONTHS from "../../Config/CalenderConfig";
import HOLIDAYS_IN_INDIA_2023 from "../../Config/holidayConfig";
import "./calenderStyle.css";
import DayBox from "../DayBox/DayBox";
import Modal from "../Modal/modal";

function Calender() {
  //using state to maintain current month data displayed on screen
  const [currentMonth, setCurrentMonth] = useState(0);
  //logic to change month when button left or right is clicked
  function changeMonth(change) {
    if (change === false) {
      setCurrentMonth((prev) => {
        if (prev > 0) {
          return prev - 1;
        }
        return prev;
      });
    } else {
      setCurrentMonth((prev) => {
        if (prev < 11) {
          return prev + 1;
        }
        return prev;
      });
    }
  }
  //Every month's number of days
  const daysArray = Array.from(
    { length: MONTHS[currentMonth].days },
    (_, i) => i + 1
  );
  //made holidays saved in state so that it can updated and re-render
  const [holidays, setHolidays] = useState(HOLIDAYS_IN_INDIA_2023);
  const [isModalOpen, setIsModalOpen] = useState(false);
  //using useEffect to save holidays in local storage at start of page opening
  useEffect(() => {
    const storedHolidays = localStorage.getItem("holidays_2023");
    if (storedHolidays) {
      setHolidays(JSON.parse(storedHolidays));
    }
  }, []);
  //mainting state of selected day so that when add button is clicked we can add holiday to that
  const [selectedDay, setSelectedDay] = useState(null);
  //logic to open modal to update holiday
  const openModal = (day) => {
    setSelectedDay(day);
    setIsModalOpen(true);
  };
  //Function to add festival to holidayes state and local storage
  const handleAddFestival = ({ title, description }) => {
    const formattedDate = `2023-${(MONTHS[currentMonth].number + 1)
      .toString()
      .padStart(2, "0")}-${selectedDay.toString().padStart(2, "0")}`;

    const newFestival = {
      date: formattedDate,
      name: title,
      description: description,
    };
    console.log(formattedDate);
    const updatedHolidays = [...holidays, newFestival];
    setHolidays(updatedHolidays);
    localStorage.setItem("holidays_2023", JSON.stringify(updatedHolidays));
  };

  return (
    <div className="container">
      <div className="header">
        <div className="month-actions">
          <div className="change-month">
            <button className="btn" onClick={() => changeMonth(false)}>
              &lt;
            </button>
            <div>{MONTHS[currentMonth].name} - 2023</div>
            <button className="btn" onClick={() => changeMonth(true)}>
              &gt;
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <Modal
          onClose={() => setIsModalOpen(false)}
          onAddFestival={handleAddFestival}
        />
      )}
      <div className="days-grid">
        {daysArray.map((day) => {
          const formattedDate = `2023-${(MONTHS[currentMonth].number + 1)
            .toString()
            .padStart(2, "0")}-${day?.toString().padStart(2, "0")}`;
          const holiday = holidays.find((h) => h.date === formattedDate);
          return (
            <DayBox
              key={day}
              day={day}
              isHoliday={Boolean(holiday)}
              holidayName={holiday?.name}
              holidayDesc={holiday?.description}
              onAdd={() => openModal(day)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Calender;

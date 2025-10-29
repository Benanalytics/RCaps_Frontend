import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './index.scss'; // Import your custom CSS for styling

const Calender = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div>
      <div className="custom-calendar-container themecalendar">
        <Calendar value={date} onChange={handleDateChange} />
      </div>
    </div>
  );
};

export default Calender;

import React, { useState } from 'react';

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(getToday());

  function getToday() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div>
      <label htmlFor="datePicker">Select a date:</label>
      <input
        type="date"
        id="datePicker"
        name="datePicker"
        value={selectedDate}
        min={getToday()}
        onChange={handleDateChange}
      />
    </div>
  );
};

export default DatePicker;

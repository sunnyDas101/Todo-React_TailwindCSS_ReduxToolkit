import React, { useState } from "react";

const TimeInput = ({ value, onChange }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;

    const sanitizedValue = inputValue.replace(/[^\d:]/g, "");

    setInputValue(sanitizedValue);
  };

  const formatTime = (time) => {
    const date = new Date(`2000-01-01T${time}`);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const handleInputBlur = () => {
    const isValidTime = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(inputValue);
    if (isValidTime) {
      onChange(formatTime(inputValue));
    }
  };

  return (
    <input
      className="bg-secondary text-white px-4 py-2 ml-14"
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      onBlur={handleInputBlur}
      placeholder="HH:MM"
    />
  );
};

export default TimeInput;

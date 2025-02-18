import React, { useReducer } from "react";
import Navbar from "../components/Navbar";
import BookingForm from "../components/BookingForm";

const generateTimeSlots = (start, end) => {
  if (!start || !end) return [];

  const times = [];
  let [hour, minute] = start.split(":").map(Number);

  while (
    hour < Number(end.split(":")[0]) ||
    (hour === Number(end.split(":")[0]) && minute <= Number(end.split(":")[1]))
  ) {
    const ampm = hour >= 12 ? "PM" : "AM";
    const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
    const formattedTime = `${formattedHour}:${minute
      .toString()
      .padStart(2, "0")} ${ampm}`;
    times.push(formattedTime);
    minute += 30;
    if (minute === 60) {
      minute = 0;
      hour += 1;
    }
  }

  return times;
};

const initializeTimes = () => {
  return {
    0: generateTimeSlots("10:00", "22:00"),
    1: generateTimeSlots("11:00", "21:00"),
    2: generateTimeSlots("11:00", "21:00"),
    3: generateTimeSlots("11:00", "21:00"),
    4: generateTimeSlots("11:00", "21:00"),
    5: generateTimeSlots("11:00", "21:00"),
    6: generateTimeSlots("10:00", "22:00"),
  };
};

const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_DATE":
      return state;
    default:
      return state;
  }
};

const Booking = () => {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    {},
    initializeTimes
  );

  return (
    <div>
      <Navbar />
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </div>
  );
};

export default Booking;

import { useState, useEffect } from "react";
import Button from "./Button";
import "../styles/Booking.css";
import { fetchAPI } from "../utils/mockAPI"; // Import the fetchAPI function

function BookingForm({ availableTimes, dispatch }) {
  const [firstName, setFirstName] = useState({ value: "", isTouched: false });
  const [lastName, setLastName] = useState({ value: "", isTouched: false });
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [occasion, setOccasion] = useState("");
  const [email, setEmail] = useState({ value: "", isTouched: false });
  const [phone, setPhone] = useState({ value: "", isTouched: false });
  const [number, setNumber] = useState("1");
  const [availableTimesForDate, setAvailableTimesForDate] = useState([]);

  useEffect(() => {
    if (selectedDate) {
      const date = new Date(selectedDate);
      const times = fetchAPI(date);
      setAvailableTimesForDate(times);
    }
  }, [selectedDate]);

  const getIsFormValid = () => {
    return (
      firstName.value &&
      lastName.value &&
      validateEmail(email.value) &&
      phone.value &&
      lastName.value.length >= 3
    );
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const clearForm = () => {
    setFirstName({ value: "", isTouched: false });
    setLastName({ value: "", isTouched: false });
    setEmail({ value: "", isTouched: false });
    setSelectedDate("");
    setSelectedTime("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking confirmed!");
    clearForm();
  };

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setSelectedDate(newDate);
    dispatch({ type: "UPDATE_DATE", date: newDate });
  };

  return (
    <div className="booking">
      <h2>Book your table!</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <div className="date-column">
            <div className="date">
              <label>
                Select date <sup>*</sup>
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={handleDateChange}
                required
              />
            </div>
            <div className="people">
              <label>
                Number of people <sup>*</sup>
              </label>
              <select
                className="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              >
                {[...Array(12)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
            <div className="first">
              <label>
                First name <sup>*</sup>
              </label>
              <input
                value={firstName.value}
                onChange={(e) =>
                  setFirstName({ ...firstName, value: e.target.value })
                }
                placeholder=""
              />
            </div>
            <div className="email">
              <label>
                Email address <sup>*</sup>
              </label>
              <input
                value={email.value}
                onChange={(e) => setEmail({ ...email, value: e.target.value })}
              />
            </div>
          </div>
          <div className="time-column">
            <div className="time">
              <label>
                Select time <sup>*</sup>
              </label>
              <select
                className="time-input"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                required
                disabled={!selectedDate}
              >
                <option value=""> </option>
                {availableTimesForDate.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
            <div className="occasion">
              <label>Occasion </label>
              <select
                className="occasion-input"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
              >
                <option>Not a special occasion</option>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Proposal</option>
                <option>Business</option>
              </select>
            </div>
            <div className="last">
              <label>
                Last name <sup>*</sup>
              </label>
              <input
                value={lastName.value}
                onChange={(e) =>
                  setLastName({ ...lastName, value: e.target.value })
                }
                placeholder=""
              />
            </div>
            <div className="phone">
              <label>
                Phone Number <sup>*</sup>
              </label>
              <input
                value={phone.value}
                onChange={(e) => setPhone({ ...phone, value: e.target.value })}
              />
            </div>
          </div>
          <div className="buttons">
            <Button type="submit" disabled={!getIsFormValid()}>
              Submit
            </Button>
            <Button type="button" onClick={clearForm}>
              Cancel
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default BookingForm;

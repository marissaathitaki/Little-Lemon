import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import "../styles/Booking.css";
import { fetchAPI, submitAPI } from "../utils/mockAPI";

function BookingForm({ availableTimes, dispatch }) {
  const [firstName, setFirstName] = useState({ value: "", isTouched: false });
  const [lastName, setLastName] = useState({ value: "", isTouched: false });
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [occasion, setOccasion] = useState("No occasion");
  const [email, setEmail] = useState({ value: "", isTouched: false });
  const [phone, setPhone] = useState({ value: "", isTouched: false });
  const [number, setNumber] = useState("1");
  const [availableTimesForDate, setAvailableTimesForDate] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (selectedDate) {
      const date = new Date(selectedDate);
      const times = fetchAPI(date);
      setAvailableTimesForDate(times);
    }
  }, [selectedDate]);

  const getIsFormValid = () => {
    return (
      firstName.value.trim() !== "" &&
      lastName.value.trim() !== "" &&
      selectedDate !== "" &&
      selectedTime !== "" &&
      validateEmail(email.value) &&
      phone.value.trim() !== ""
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
    setOccasion("No occasion");
    setPhone({ value: "", isTouched: false });
    setNumber("1");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      phone: phone.value,
      number: number,
      date: selectedDate,
      time: selectedTime,
      occasion: occasion,
    };

    const isSuccess = submitAPI(formData);
    if (isSuccess) {
      navigate("/confirmation", { state: formData }); // Redirect with data
    } else {
      alert("Something went wrong. Please try again.");
    }

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
              <label htmlFor="date">
                Select date <sup>*</sup>
              </label>
              <input
                id="date"
                type="date"
                value={selectedDate}
                onChange={handleDateChange}
                required
              />
            </div>
            <div className="people">
              <label htmlFor="people">
                Number of people <sup>*</sup>
              </label>
              <select
                id="people"
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
              <label htmlFor="first">
                First name <sup>*</sup>
              </label>
              <input
                id="first"
                value={firstName.value}
                onChange={(e) =>
                  setFirstName({ ...firstName, value: e.target.value })
                }
                placeholder=""
              />
            </div>
            <div className="email">
              <label htmlFor="email">
                Email address <sup>*</sup>
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                value={email.value}
                onChange={(e) => setEmail({ ...email, value: e.target.value })}
              />
            </div>
          </div>
          <div className="time-column">
            <div className="time">
              <label htmlFor="time">
                Select time <sup>*</sup>
              </label>
              <select
                id="time"
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
              <label htmlFor="occasion">Occasion </label>
              <select
                id="occasion"
                className="occasion-input"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
              >
                <option>No occasion</option>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Proposal</option>
                <option>Business</option>
              </select>
            </div>
            <div className="last">
              <label htmlFor="last">
                Last name <sup>*</sup>
              </label>
              <input
                id="last"
                value={lastName.value}
                onChange={(e) =>
                  setLastName({ ...lastName, value: e.target.value })
                }
                placeholder=""
              />
            </div>
            <div className="phone">
              <label htmlFor="phone">
                Phone Number <sup>*</sup>
              </label>
              <input
                id="phone"
                value={phone.value}
                type="tel"
                autoComplete="tel"
                onChange={(e) => setPhone({ ...phone, value: e.target.value })}
              />
            </div>
          </div>
          <div className="buttons">
            <Button
              type="submit"
              disabled={!getIsFormValid()}
              onClick={handleSubmit}
            >
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

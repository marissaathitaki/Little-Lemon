// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Button from "./Button";
// import "../styles/BookingForm.css";
// import { fetchAPI, submitAPI } from "../utils/mockAPI";

// function BookingForm({ dispatch }) {
//   const [firstName, setFirstName] = useState({
//     value: "",
//     isTouched: false,
//     error: "",
//   });
//   const [lastName, setLastName] = useState({
//     value: "",
//     isTouched: false,
//     error: "",
//   });
//   const [selectedDate, setSelectedDate] = useState("");
//   const [selectedTime, setSelectedTime] = useState("");
//   const [occasion, setOccasion] = useState("No occasion");
//   const [email, setEmail] = useState({
//     value: "",
//     isTouched: false,
//     error: "",
//   });
//   const [phone, setPhone] = useState({
//     value: "",
//     isTouched: false,
//     error: "",
//   });
//   const [number, setNumber] = useState("1");
//   const [availableTimesForDate, setAvailableTimesForDate] = useState([]);

//   const navigate = useNavigate();
//   const currentDate = new Date().toISOString().split("T")[0];

//   useEffect(() => {
//     if (selectedDate) {
//       const date = new Date(selectedDate);
//       const times = fetchAPI(date);
//       setAvailableTimesForDate(times);
//     }
//   }, [selectedDate]);

//   const validateEmail = (email) => {
//     return /\S+@\S+\.\S+/.test(email) ? "" : "Enter a valid email address.";
//   };

//   const getIsFormValid = () => {
//     return (
//       firstName.value.trim() !== "" &&
//       lastName.value.trim() !== "" &&
//       selectedDate !== "" &&
//       selectedTime !== "" &&
//       validateEmail(email.value) &&
//       phone.value.trim() !== ""
//     );
//   };

//   const validateField = (field, value) => {
//     if (field === "firstName") {
//       return value.trim() === "" ? "First name is required." : "";
//     }

//     if (field === "lastName") {
//       return value.trim() === "" ? "Last name is required." : "";
//     }

//     if (field === "email") {
//       return /\S+@\S+\.\S+/.test(value) ? "" : "Enter a valid email address.";
//     }
//     if (field === "phone") {
//       return /^\d{10}$/.test(value)
//         ? ""
//         : "Enter a valid 10-digit phone number.";
//     }

//     return "";
//   };

//   const clearForm = () => {
//     setFirstName({ value: "", isTouched: false });
//     setLastName({ value: "", isTouched: false });
//     setEmail({ value: "", isTouched: false });
//     setSelectedDate("");
//     setSelectedTime("");
//     setOccasion("No occasion");
//     setPhone({ value: "", isTouched: false });
//     setNumber("1");
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const formData = {
//       firstName: firstName.value,
//       lastName: lastName.value,
//       email: email.value,
//       phone: phone.value,
//       number: number,
//       date: selectedDate,
//       time: selectedTime,
//       occasion: occasion,
//     };

//     const isSuccess = submitAPI(formData);
//     if (isSuccess) {
//       navigate("/confirmation", { state: formData });
//     } else {
//       alert("Something went wrong. Please try again.");
//     }

//     clearForm();
//   };

//   const handleDateChange = (e) => {
//     const newDate = e.target.value;
//     setSelectedDate(newDate);
//     dispatch({ type: "UPDATE_DATE", date: newDate });
//   };

//   const handleInputChange = (field, value, setState) => {
//     setState((prev) => ({
//       ...prev,
//       value,
//       error: prev.isTouched ? validateField(field, value) : "",
//     }));
//   };

//   const handleBlur = (field, value, setState) => {
//     setState((prev) => ({
//       ...prev,
//       isTouched: true,
//       error: validateField(field, value),
//     }));
//   };

//   return (
//     <div className="booking">
//       <h2>Book your table!</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-section">
//           <div className="date-column">
//             <div className="date">
//               <label htmlFor="date">
//                 Select date <sup>*</sup>
//               </label>
//               <input
//                 id="date"
//                 type="date"
//                 value={selectedDate}
//                 onChange={handleDateChange}
//                 min={currentDate}
//                 required
//               />
//             </div>
//             <div className="people">
//               <label htmlFor="people">
//                 Number of people <sup>*</sup>
//               </label>
//               <select
//                 id="people"
//                 className="number"
//                 value={number}
//                 onChange={(e) => setNumber(e.target.value)}
//               >
//                 {[...Array(12)].map((_, i) => (
//                   <option key={i + 1} value={i + 1}>
//                     {i + 1}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div className="first">
//               <label htmlFor="first">
//                 First name <sup>*</sup>
//               </label>
//               <input
//                 id="first"
//                 value={firstName.value}
//                 onChange={(e) =>
//                   handleInputChange("firstName", e.target.value, setFirstName)
//                 }
//                 onBlur={(e) =>
//                   handleBlur("firstName", e.target.value, setFirstName)
//                 }
//                 placeholder=""
//               />
//               {firstName.error && (
//                 <p className="error-message">{firstName.error}</p>
//               )}
//             </div>
//             <div className="email">
//               <label htmlFor="email">
//                 Email address <sup>*</sup>
//               </label>
//               <input
//                 id="email"
//                 type="email"
//                 autoComplete="email"
//                 value={email.value}
//                 onChange={(e) =>
//                   handleInputChange("email", e.target.value, setEmail)
//                 }
//                 onBlur={(e) => handleBlur("email", e.target.value, setEmail)}
//               />
//               {email.error && <p className="error-message">{email.error}</p>}
//             </div>
//           </div>
//           <div className="time-column">
//             <div className="time">
//               <label htmlFor="time">
//                 Select time <sup>*</sup>
//               </label>
//               <select
//                 id="time"
//                 className="time-input"
//                 value={selectedTime}
//                 onChange={(e) => setSelectedTime(e.target.value)}
//                 required
//                 disabled={!selectedDate}
//               >
//                 <option value=""> </option>
//                 {availableTimesForDate.map((slot) => (
//                   <option key={slot} value={slot}>
//                     {slot}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div className="occasion">
//               <label htmlFor="occasion">Occasion </label>
//               <select
//                 id="occasion"
//                 className="occasion-input"
//                 value={occasion}
//                 onChange={(e) => setOccasion(e.target.value)}
//               >
//                 <option>No occasion</option>
//                 <option>Birthday</option>
//                 <option>Anniversary</option>
//                 <option>Proposal</option>
//                 <option>Business</option>
//               </select>
//             </div>
//             <div className="last">
//               <label htmlFor="last">
//                 Last name <sup>*</sup>
//               </label>
//               <input
//                 id="last"
//                 value={lastName.value}
//                 onChange={(e) =>
//                   handleInputChange("lastName", e.target.value, setLastName)
//                 }
//                 onBlur={(e) =>
//                   handleBlur("lastName", e.target.value, setLastName)
//                 }
//                 placeholder=""
//               />
//               {lastName.error && (
//                 <p className="error-message">{lastName.error}</p>
//               )}
//             </div>
//             <div className="phone">
//               <label htmlFor="phone">
//                 Phone Number <sup>*</sup>
//               </label>
//               <input
//                 id="phone"
//                 value={phone.value}
//                 type="tel"
//                 autoComplete="tel"
//                 onChange={(e) =>
//                   handleInputChange("phone", e.target.value, setPhone)
//                 }
//                 onBlur={(e) => handleBlur("phone", e.target.value, setPhone)}
//               />
//               {phone.error && <p className="error-message">{phone.error}</p>}
//             </div>
//           </div>
//           <div className="buttons">
//             <Button
//               type="submit"
//               disabled={!getIsFormValid()}
//               onClick={handleSubmit}
//             >
//               Submit
//             </Button>
//             <Button type="button" onClick={clearForm}>
//               Cancel
//             </Button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default BookingForm;

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import "../styles/BookingForm.css";
import { fetchAPI, submitAPI } from "../utils/mockAPI";

function BookingForm({ dispatch }) {
  const [firstName, setFirstName] = useState({
    value: "",
    isTouched: false,
    error: "",
  });
  const [lastName, setLastName] = useState({
    value: "",
    isTouched: false,
    error: "",
  });
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [occasion, setOccasion] = useState("No occasion");
  const [email, setEmail] = useState({
    value: "",
    isTouched: false,
    error: "",
  });
  const [phone, setPhone] = useState({
    value: "",
    isTouched: false,
    error: "",
  });
  const [number, setNumber] = useState("1");
  const [availableTimesForDate, setAvailableTimesForDate] = useState([]);

  const navigate = useNavigate();
  const currentDate = new Date().toISOString().split("T")[0];

  useEffect(() => {
    if (selectedDate) {
      const date = new Date(selectedDate);
      const times = fetchAPI(date);
      setAvailableTimesForDate(times);
    }
  }, [selectedDate]);

  // ✅ Move this function before `getIsFormValid`
  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email) ? "" : "Enter a valid email address.";
  };

  const getIsFormValid = () => {
    return (
      firstName.value.trim() !== "" &&
      lastName.value.trim() !== "" &&
      selectedDate !== "" &&
      selectedTime !== "" &&
      validateEmail(email.value) === "" &&
      phone.value.trim() !== ""
    );
  };

  const validateField = (field, value) => {
    if (field === "firstName")
      return value.trim() === "" ? "First name is required." : "";
    if (field === "lastName")
      return value.trim() === "" ? "Last name is required." : "";
    if (field === "email") return validateEmail(value);
    if (field === "phone")
      return /^\d{10}$/.test(value)
        ? ""
        : "Enter a valid 10-digit phone number.";
    return "";
  };

  const clearForm = () => {
    setFirstName({ value: "", isTouched: false, error: "" });
    setLastName({ value: "", isTouched: false, error: "" });
    setEmail({ value: "", isTouched: false, error: "" });
    setPhone({ value: "", isTouched: false, error: "" });
    setSelectedDate("");
    setSelectedTime("");
    setOccasion("No occasion");
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
      navigate("/confirmation", { state: formData });
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

  const handleInputChange = (field, value, setState) => {
    setState((prev) => ({
      ...prev,
      value,
      error: prev.isTouched ? validateField(field, value) : "",
    }));
  };

  const handleBlur = (field, value, setState) => {
    setState((prev) => ({
      ...prev,
      isTouched: true,
      error: validateField(field, value),
    }));
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
                min={currentDate}
                aria-label="Select a date"
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
                aria-label="Select number of people"
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
                aria-label="Enter your first name"
                onChange={(e) =>
                  handleInputChange("firstName", e.target.value, setFirstName)
                }
                onBlur={(e) =>
                  handleBlur("firstName", e.target.value, setFirstName)
                }
              />
              {firstName.error && (
                <p className="error-message">{firstName.error}</p>
              )}
            </div>
            <div className="email">
              <label htmlFor="email">
                Email address <sup>*</sup>
              </label>
              <input
                id="email"
                type="email"
                value={email.value}
                aria-label="Enter your email"
                onChange={(e) =>
                  handleInputChange("email", e.target.value, setEmail)
                }
                onBlur={(e) => handleBlur("email", e.target.value, setEmail)}
              />
              {email.error && <p className="error-message">{email.error}</p>}
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
                aria-label="Select a time"
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
                aria-label="Select an occasion"
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
                aria-label="Enter your last name"
                onChange={(e) =>
                  handleInputChange("lastName", e.target.value, setLastName)
                }
                onBlur={(e) =>
                  handleBlur("lastName", e.target.value, setLastName)
                }
              />
              {lastName.error && (
                <p className="error-message">{lastName.error}</p>
              )}
            </div>
            <div className="phone">
              <label htmlFor="phone">
                Phone Number <sup>*</sup>
              </label>
              <input
                id="phone"
                type="tel"
                value={phone.value}
                aria-label="Enter your phone number"
                onChange={(e) =>
                  handleInputChange("phone", e.target.value, setPhone)
                }
                onBlur={(e) => handleBlur("phone", e.target.value, setPhone)}
              />
              {phone.error && <p className="error-message">{phone.error}</p>}
            </div>
          </div>
          <div className="buttons">
            <Button
              type="submit"
              disabled={!getIsFormValid()}
              onClick={handleSubmit}
              aria-label="Submit the form"
            >
              Submit
            </Button>
            <Button
              type="button"
              onClick={clearForm}
              aria-label="Clear the form"
            >
              Cancel
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default BookingForm;

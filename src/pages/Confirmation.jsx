import React from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import "../styles/Confirmation.css";

const Confirmation = () => {
  const location = useLocation();
  const reservation = location.state;

  return (
    <>
      <Navbar />
      <div className="confirm">
        <h2>Reservation Confirmed!</h2>
        <div className="text">
          <p>
            <strong>Name: </strong> {reservation.firstName}{" "}
            {reservation.lastName}
          </p>
          <p>
            <strong>Email: </strong> {reservation.email}
          </p>
          <p>
            <strong>Phone: </strong> {reservation.phone}
          </p>
          <p>
            <strong>Date: </strong> {reservation.date}
          </p>
          <p>
            <strong>Time: </strong> {reservation.time}
          </p>
          <p>
            <strong>Guests: </strong> {reservation.number}
          </p>
          <p>
            <strong>Occasion: </strong> {reservation.occasion}
          </p>
        </div>
        <Button to="/">Back to Home</Button>
      </div>
    </>
  );
};

export default Confirmation;

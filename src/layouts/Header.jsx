import React from "react";
import Button from "../components/Button";
import bannerImage from "../assets/banner.jpg";
import "../styles/Header.css";

function Header() {
  return (
    <section className="header">
      <div>
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <div className="header-button">
          <Button to="/reservations">Book a table</Button>
        </div>
      </div>
      <div className="banner-image">
        <img src={bannerImage} alt="promo-banner" />
      </div>
    </section>
  );
}

export default Header;

import React from "react";
import { Link } from "react-router-dom";
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
        <Link to="/Booking">
          <button>Book a table</button>
        </Link>
      </div>
      <div className="banner-image">
        <img src={bannerImage} alt="promo-banner" />
      </div>
    </section>
  );
}

export default Header;

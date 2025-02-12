import React from "react";
import "../styles/Footer.css";
import logo from "../assets/Footer_logo.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";

function Footer() {
  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="logo">
          <img src={logo} alt="lemon logo" />
        </div>
        <div className="doormat-nav">
          <h3>Navigation</h3>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/menu">Menu</a>
          <a href="/reservations">Reservations</a>
          <a href="/orderonline">Order Online</a>
          <a href="/login">Login</a>
        </div>
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>📍 Address: 456 Lemon Avenue, Chicago, IL 60610</p>
          <p>📧 Email: contact@littlelemonrestaurant.com</p>
          <p>📞 Phone: +1 (312) 555-7890</p>
          <p>⏰ Working Hours:</p>
          <ul>
            <li>Monday – Friday: 11:00 AM – 9:00 PM</li>
            <li>Saturday – Sunday: 10:00 AM – 10:00 PM</li>
          </ul>
        </div>
        <div className="social-media">
          <a href="https://www.facebook.com">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="https://www.instagram.com">
            <img src={instagram} alt="instagram" />
          </a>
          <a href="https://www.twitter.com">
            <img src={twitter} alt="twitter" />
          </a>
        </div>
      </footer>
      <div className="copyrights">
        <p className="copyrights">© 2025 Little Lemon Restaurant</p>
      </div>
    </div>
  );
}

export default Footer;

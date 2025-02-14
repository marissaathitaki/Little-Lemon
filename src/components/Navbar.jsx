import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useState, useEffect } from "react";
import "../styles/Navbar.css";
import mainlogo from "../assets/main_logo.png";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className={`nav ${menuOpen ? "open" : ""}`}>
      <RouterLink to="/">
        <img className="main_logo" src={mainlogo} alt="lemon logo" />
      </RouterLink>
      <button className="hamburger" onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#5f6368"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </button>
      <ul className="nav-list">
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <ScrollLink to="about" smooth={true} duration={600}>
            About
          </ScrollLink>
        </li>
        <li>
          <RouterLink to="menu">Menu</RouterLink>
        </li>
        <li>
          <RouterLink to="/reservations">Reservations</RouterLink>
        </li>
        <li>
          <RouterLink to="/orderonline">Order Online</RouterLink>
        </li>
        <li>
          <RouterLink to="/login">Login</RouterLink>
        </li>
      </ul>
      <ul className={`sidebar ${menuOpen ? "open" : ""}`}>
        <button className="close-button" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#5f6368"
          >
            <path d="M480-417l-233 233-57-57 233-233-233-233 57-57 233 233 233-233 57 57-233 233 233 233-57 57-233-233Z" />
          </svg>
        </button>
        <li>
          <RouterLink to="/" onClick={toggleMenu}>
            Home
          </RouterLink>
        </li>
        <li>
          <ScrollLink to="about" onClick={toggleMenu}>
            About
          </ScrollLink>
        </li>
        <li>
          <RouterLink to="/menu" onClick={toggleMenu}>
            Menu
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/reservations" onClick={toggleMenu}>
            Reservations
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/orderonline" onClick={toggleMenu}>
            Order Online
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/login" onClick={toggleMenu}>
            Login
          </RouterLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

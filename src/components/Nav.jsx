import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Nav.css";

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
      <Link to="/">
        <img className="main_logo" src="/main_logo.png" alt="lemon logo" />
      </Link>
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
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/reservations">Reservations</Link>
        </li>
        <li>
          <Link to="/orderonline">Order Online</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
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
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={toggleMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to="/menu" onClick={toggleMenu}>
            Menu
          </Link>
        </li>
        <li>
          <Link to="/reservations" onClick={toggleMenu}>
            Reservations
          </Link>
        </li>
        <li>
          <Link to="/orderonline" onClick={toggleMenu}>
            Order Online
          </Link>
        </li>
        <li>
          <Link to="/login" onClick={toggleMenu}>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <h2>WEB_DEVELOPER</h2>
      </div>

      <div className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#mywork">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </div>

      <div className="nav-connect">
        <a href="#contact">Connect With Me</a>
      </div>

      <div className="nav-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </div>
  );
};

export default Navbar;

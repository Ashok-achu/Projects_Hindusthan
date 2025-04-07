import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import "../styles/Navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownStates, setDropdownStates] = useState({});

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleDropdown = (menu) => {
    setDropdownStates((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="contact-info">
          <FaPhone /> +91 98765 43210
          <FaEnvelope /> info@institution.com
        </div>
        <div className="social-icons">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedin /></a>
        </div>
      </div>

      {/* Navbar */}
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="navbar-content">
          <div className="logo">
            <img src={logo} alt="Institution Logo" />
          </div>

          <div className="menu-icon" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>

          <ul className={`nav-links ${isOpen ? "active" : ""}`}>
            <li><Link to="/">Home</Link></li>

            {/* About Dropdown */}
            <li className="dropdown">
              <div className="dropdown-toggle" onClick={() => toggleDropdown("about")}>
                About <FaChevronDown className={dropdownStates.about ? "open" : ""} />
              </div>
              {dropdownStates.about && (
                <ul className="dropdown-menu">
                  <li><Link to="/#trust">Trust</Link></li>
                  <li><Link to="/#about-us">About Us</Link></li>
                </ul>
              )}
            </li>

            {/* Our Institutions Dropdown */}
            <li className="dropdown">
              <div className="dropdown-toggle" onClick={() => toggleDropdown("ourInstitutions")}>
                Our Institutions <FaChevronDown className={dropdownStates.ourInstitutions ? "open" : ""} />
              </div>
              {dropdownStates.ourInstitutions && (
                <ul className="dropdown-menu">
                  <li><Link to="/#arts-and-science">Arts & Science</Link></li>
                  <li><Link to="/#engineering">Engineering & Technology</Link></li>
                  <li><Link to="/#technology">Technology</Link></li>
                  <li><Link to="/#architecture">Architecture</Link></li>
                  <li><Link to="/#healthscience">Health Science</Link></li>
                  <li><Link to="/#nursing">Nursing</Link></li>
                  <li><Link to="/#international">International School</Link></li>
                  <li><Link to="/#school">Matriculation School</Link></li>
                </ul>
              )}
            </li>

            {/* Academics Dropdown */}
            <li className="dropdown">
              <div className="dropdown-toggle" onClick={() => toggleDropdown("academics")}>
                Academics <FaChevronDown className={dropdownStates.academics ? "open" : ""} />
              </div>
              {dropdownStates.academics && (
                <ul className="dropdown-menu">
                  <li><Link to="/course">Courses</Link></li>
                  <li><Link to="/#events">Events</Link></li>
                </ul>
              )}
            </li>

            <li><Link to="/#campus-life">Our Placements</Link></li>
            <li><Link to="/#recruiters">Careers</Link></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

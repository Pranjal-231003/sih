import React from "react";
import "./App.css";
import flagIcon from "./images/engFlag.png";
import logo from "./images/logo.png";
const Nav = () => {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Website Logo" />
        </div>
        <ul className="nav-list">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Dashboard</a>
          </li>
          <li>
            <a href="#">Eligibility</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li className="sign-in">
            <a href="#">Sign Up/Sign In</a>
          </li>
          <div className="flag-icon">
            <img src={flagIcon} alt="English Flag" />
          </div>
        </ul>
      </nav>

      <div className="centered-logo">
        <img src={logo} alt="Website Logo" />
        <button className="right-button">
          Register <span className="arrow-icon">&uarr;</span>
        </button>
      </div>
    </div>
  );
};

export default Nav;

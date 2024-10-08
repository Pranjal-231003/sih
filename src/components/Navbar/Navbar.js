import React from "react";
import "../Navbar/Navbar.css";
import logo from "../../images/logo.png";
import flagIcon from "../../images/engFlag.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Website Logo" />
      </div>
      <ul className="nav-list">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="/profile">Dashboard</a>
        </li>
        {/* <li>
          <a href="#">Eligibility</a>
        </li> */}
        <li>
          <a href="#">Contact Us</a>
        </li>
        <li className="sign-in">
          <a href="/signup">Sign Up/Sign In</a>
        </li>
        <div className="flag-icon">
          <img src={flagIcon} alt="English Flag" />
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;

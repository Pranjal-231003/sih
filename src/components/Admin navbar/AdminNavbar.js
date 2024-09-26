import React from "react";
import "../Admin navbar/AdminNavbar.css";
import logo from "../../images/logo.png";
import flagIcon from "../../images/engFlag.png";

const AdminNavbar = () => {
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
            <a href="#">Application</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Admin</a>
          </li>
          <div className="flag-icon">
            <img src={flagIcon} alt="English Flag" />
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default AdminNavbar;

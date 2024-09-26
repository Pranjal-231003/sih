import React from "react";
import logo from "../../images/logo.png";
import "../AdminLandingPage/AdminLandingPage.css";
const AdminLandingPage = () => {
  return (
    <div className="centered-logo">
      <img src={logo} alt="Website Logo" />
      <p className="right-text">Hello Admin!!</p>
    </div>
  );
};

export default AdminLandingPage;

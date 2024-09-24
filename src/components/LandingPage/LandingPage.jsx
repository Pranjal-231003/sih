import React from "react";
import "./LandingPage.css";
import logo from "../../images/logo.png";
function LandingPage() {
    return (
        <div className="centered-logo">
            <img src={logo} alt="Website Logo" />
            <button className="right-button">
            Register <span className="arrow-icon">&uarr;</span>
            </button>
        </div>
    );
}
export default LandingPage;

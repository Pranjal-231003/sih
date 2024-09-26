import React, { useState } from "react";
import axios from "axios";
import "./SignUp.css";

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        console.log(formData);
      const response = await axios.post("http://localhost:5000/api/auth/signup", formData);
      console.log(response);
      setSuccessMessage(response.data.message);
      setError("");  // Clear any previous errors
    } catch (err) {
      setError(err.response.data.message || "Something went wrong");
    }
  };

  return (
    <div className="background">
      <div className="box">
        <div className="form-container">
          <p className="title">Create account</p>

          <form className="form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <button type="submit" className="form-btn">Create account</button>
          </form>

          {error && <p className="error-message">{error}</p>}
          {successMessage && <p className="success-message">{successMessage}</p>}

          <p className="sign-up-label">
            Already have an account? <span className="sign-up-link">Log in</span>
          </p>

          <div className="buttons-container">
            <div className="google-login-button">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" x="0px" y="0px" className="google-icon" viewBox="0 0 48 48" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                {/* SVG paths */}
              </svg>
              <span>Sign up with Google</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

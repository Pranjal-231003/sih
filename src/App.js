import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserProfile from "./components/UserProfile/UserProfile.js";
import Login from "./components/Login/Login";
import ApplicationForm from "./components/ApplicationForm/ApplicationForm.js";
import SignUp from "./components/Signup/SignUp";
import Navbar from "./components/Navbar/Navbar.js";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import ApplicationDashboard from "./components/Dashboard/ApplicationDashboard.jsx";
import ApplicationsAdmin from "./components/ApplicationsAdmin/ApplicationsAdmin.jsx";
import AdminNavbar from "./components/AdminNavbar/AdminNavbar.js";
import AdminLandingPage from "./components/AdminLandingPage/AdminLandingPage.js";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Common for all routes */}
        <Routes>
          <Route path="/" element={<LandingPage />} /> {/* Default landing page */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/apply" element={<ApplicationForm />} />
          <Route path="/dashboard" element={<ApplicationDashboard />} />
          <Route path="/adminapplications" element={<ApplicationsAdmin />} />
          <Route path="/adminlanding" element={<AdminLandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
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
    <div className="App">
      {/* <AdminNavbar /> */}
      {/* <AdminLandingPage /> */}
      <Navbar />
      {/* <ApplicationForm /> */}
      {/* <SignUp /> */}
      {/* <Login /> */}
      {/* <LandingPage /> */}
      {/* <ApplicationDashboard/> */}
      {/* <ApplicationsAdmin/> */}
    </div>
  );
}

export default App;

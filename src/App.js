import logo from "./logo.svg";
import "./App.css";
import UserProfile from "./components/UserProfile/UserProfile.js";
import Login from "./components/Login/Login";
import ApplicationForm from './components/ApplicationForm/ApplicationForm.js';
import SignUp from "./components/Signup/SignUp";
import Navbar from "./components/Navbar/Navbar.js";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import ApplicationDashboard from "./components/Dashboard/ApplicationDashboard.jsx";
import ApplicationsAdmin from "./components/ApplicationsAdmin/ApplicationsAdmin.jsx";
function App() {
  return (
    <div className="App">
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

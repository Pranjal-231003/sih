import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login/Login";
import SignUp from "./components/Signup/SignUp";
import Navbar from "./components/Navbar/Navbar.js";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import ApplicationDashboard from "./components/Dashboard/ApplicationDashboard.jsx";
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <SignUp /> */}
      {/* <Login /> */}
      {/* <LandingPage /> */}
      {/* <ApplicationDashboard/> */}
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login/Login";
import SignUp from "./components/Signup/SignUp";
import Navbar from "./components/Navbar/Navbar.js";
function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      {/* <Navbar /> */}
      <SignUp />
    </div>
  );
}

export default App;

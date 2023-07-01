import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import ErrorPage from "./components/ErrorPage";
import StepsInProcess from "./components/StepsInProcess";
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <div>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/homePage" element={<HomePage />} />
          <Route path="/loginPage" element={<LoginPage />} />
          <Route path="/signupPage" element={<SignupPage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/steps" element={<StepsInProcess />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

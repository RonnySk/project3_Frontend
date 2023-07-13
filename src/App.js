import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import ErrorPage from "./components/ErrorPage";
import StepsInProcess from "./components/StepsInProcess";
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import RealEstateHome from "./components/RealEstateHome";
import Calculator from "./components/Calculator";
import AddProperty from "./components/AddProperty";

function App() {
  return (
    <div>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/realEstateHome" element={<RealEstateHome />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/steps" element={<StepsInProcess />} />
          <Route path="/AddProperty" element={<AddProperty />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

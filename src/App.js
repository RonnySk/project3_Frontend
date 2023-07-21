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
import OneProperty from "./components/OneProperty";
import AllProperties from "./components/AllProperties";
import RealEstateAgentProperties from "./components/RealEstateAgentProperties";
import Chatbot from "./components/ChatBot";
import CreateMessenger from "./components/messenger/CreateMessenger";
import Messenger from "./components/messenger/Messenger";

function App() {
  return (
    <div>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/realEstateHome" element={<RealEstateHome />} />
          <Route
            path="/realestateallproperties/:agent_id"
            element={<RealEstateAgentProperties />}
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/steps" element={<StepsInProcess />} />
          <Route path="/addProperty" element={<AddProperty />} />
          <Route path="/oneproperty/:property_id" element={<OneProperty />} />
          <Route
            path="/oneproperty/allProperties"
            element={<AllProperties />}
          />
          <Route path="/steps" element={<Chatbot />} />
          <Route path="/createmessenger" element={<CreateMessenger />} />
          <Route path="/messenger/:messenger_id" element={<Messenger />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ErrorPage from "../src/pages/ErrorPage.jsx";
import StepsInProcess from "./components/StepsInProcess";
import NavBar from "./components/NavBar";
import LandingPage from "./pages/LandingPage.jsx";
import RealEstateHome from "./pages/RealEstateHome";
import Calculator from "./components/Calculator";
import AddProperty from "./components/AddProperty";
import OneProperty from "./components/OneProperty";
import RealEstateAgentProperties from "./components/RealEstateAgentProperties";
import Chatbot from "./components/ChatBot";
import CreateMessenger from "../src/messenger/CreateMessenger";
import Messenger from "../src/messenger/Messenger";
import AllMessengersPage from "../src/messenger/AllMessengersPage";
import UpdateProperty from "./components/UpdateProperty";
import Step3Component from "./components/Step3Component";

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
          <Route
            path="/updateproperty/:property_id"
            element={<UpdateProperty />}
          />
          <Route path="/oneproperty/:property_id" element={<OneProperty />} />
          <Route path="/steps" element={<Chatbot />} />
          <Route path="/createmessenger" element={<CreateMessenger />} />
          <Route path="/messenger/:messenger_id" element={<Messenger />} />
          <Route
            path="/allmessenger/:user_id"
            element={<AllMessengersPage />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

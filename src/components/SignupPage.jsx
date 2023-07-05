import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5005";

function SignupPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [rsAgent, setrsAgent] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handlersAgent = (e) => setrsAgent(e.target.value);
  const handleName = (e) => setName(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    const requestBody = { email, password, name };

    axios
      .post(`${API_URL}/auth/signupPage`, requestBody)
      .then((response) => {
        navigate("/loginPage");
      })
      .catch((error) => {
        // const errorDescription = error.response.data.message;
        // setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1 className="auth-header">Sign Up</h1>

        <form onSubmit={handleSignupSubmit} className="auth-form">
          <label>Email:</label>
          <input type="email" name="email" value={email} onChange={handleEmail} className="auth-input" />

          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={handlePassword} className="auth-input" />

          <label>Name:</label>
          <input type="text" name="name" value={name} onChange={handleName} className="auth-input" />

          <div className="auth-checkbox">
            <input type="checkbox" name="rsAgent" value={rsAgent} onChange={handlersAgent} />
            <label>Are you Real Estate Agent?</label>
          </div>

          <button type="submit" className="auth-btn">
            Sign Up
          </button>
        </form>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <p className="auth-link">
          Already have account? <Link to={"/loginPage"}> Login</Link>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;

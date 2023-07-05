import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5005";

function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    axios
      .post(`${API_URL}/auth/loginPage`, requestBody)
      .then((response) => {
        console.log("JWT token", response.data.authToken);

        navigate("/");
      })
      .catch((error) => {
        if (error.response && error.response.data && error.response.data.message) {
          const errorDescription = error.response.data.message;
          setErrorMessage(errorDescription);
        } else {
          setErrorMessage("An error occurred.");
        }
      });
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1 className="auth-header">Login</h1>

        <form onSubmit={handleLoginSubmit} className="auth-form">
          <label>Email:</label>
          <input type="email" name="email" value={email} onChange={handleEmail} className="auth-input" />

          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={handlePassword} className="auth-input" />

          <button type="submit" className="auth-btn">
            Login
          </button>
        </form>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <p className="auth-link">
          Don't have an account yet? <Link to={"/signupPage"}> Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;

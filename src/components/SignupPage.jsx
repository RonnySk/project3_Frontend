import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5005";

function SignupPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isAgent, setIsAgent] = useState(false);
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleIsAgent = () => setIsAgent(!isAgent);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    const requestBody = { email, password, name, isAgent };

    axios
      .post(`${API_URL}/auth/signupPage`, requestBody)
      .then((response) => {
        navigate("/loginPage");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="SignupPage">
      <h1>Sign Up</h1>

      <form onSubmit={handleSignupSubmit}>
        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={handleEmail} />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />

        <label>Name:</label>
        <input type="text" name="name" value={name} onChange={handleName} />

        <label>Are you Real Estate Agent?:</label>
        <input type="checkbox" value={isAgent} onChange={handleIsAgent} />

        <button type="submit">Sign Up</button>
      </form>
      <p>Is "My Value" checked? {isAgent.toString()}</p>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Already have account?</p>
      <Link to={"/loginPage"}> Login</Link>
    </div>
  );
}

export default SignupPage;

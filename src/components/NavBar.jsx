import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Logo from "../images/Logo_HousingRY.png";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function NavBar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>

      {!isLoggedIn && (
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/loginPage" className="nav-link">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/signupPage" className="nav-link">
              Signup
            </Link>
          </li>
        </ul>
      )}

      {isLoggedIn && (
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/steps" className="nav-link">
              Steps
            </Link>
            <button onClick={logOutUser}>Logout</button>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default NavBar;

import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Logo from "../images/Logo_HousingRY.png";

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      <div className="nav-links-container">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/home" className="nav-link">
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
          <li className="nav-item">
            <Link to="/steps" className="nav-link">
              Steps
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

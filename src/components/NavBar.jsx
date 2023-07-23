import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Logo from "../images/Logo_HousingRY.png";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function NavBar() {
  const { isLoggedIn, logOutUser, user } = useContext(AuthContext);

  console.log("user ate home", user);

  return (
    <nav className="navbar">
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>

      {!isLoggedIn && (
        <div className="nav-links-container">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-link">
                Signup
              </Link>
            </li>
          </ul>
        </div>
      )}

      {isLoggedIn && (
        <ul className="navbar-nav">
          <li className="nav-item">
            {user.isAgent ? (
              <Link to="/realEstateHome" className="nav-link">
                Home
              </Link>
            ) : (
              <div>
                <Link to="/home" className="nav-link">
                  Home
                </Link>
                <Link to="/steps" className="nav-link">
                  Steps
                </Link>
              </div>
            )}
            <button onClick={logOutUser}>Logout</button>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default NavBar;

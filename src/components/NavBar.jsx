import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/Logo_HousingRY.png";
import { AuthContext } from "../context/auth.context";
import "../css/NavBar.css";

function NavBar() {
  const { isLoggedIn, logOutUser, user } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>

      <div className="nav-links-container">
        <ul className="navbar-nav">
          {!isLoggedIn ? (
            <>
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
            </>
          ) : (
            <>
              {user.isAgent ? (
                <li className="nav-item">
                  <Link to="/realEstateHome" className="nav-link">
                    Home
                  </Link>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <Link to="/home" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/steps" className="nav-link">
                      Steps
                    </Link>
                  </li>
                </>
              )}
              <li className="nav-item">
                <button className="button" onClick={logOutUser}>
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

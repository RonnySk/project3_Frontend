import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import "../css/HomePage.css";
import logo from "../images/Logo_HousingRY.png";
import messages from "../images/messenger.png";
import stepsicon from "../images/motivation.png";

function HomePage() {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <p>Loading...</p>;
  } else {
    return (
      <div className="home-page">
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">Welcome, {user.name}!</h1>
            <p className="hero-message">Discover your perfect home.</p>
          </div>
        </section>
        <section className="columns">
          <div className="home-page-column">
            <div className="column-content">
              <div className="icon">
                <img src={stepsicon} alt="Steps Icon" />
              </div>
              <h2 className="column-title">Go to the Steps</h2>
              <p className="column-description">
                Simplify your homebuying journey with our step-by-step guide.
              </p>
              <Link to="/steps" className="cta-button">
                Explore
              </Link>
            </div>
          </div>
          <div className="home-page-column">
            <div className="column-content">
              <div className="icon">
                <img src={messages} alt="Messages Icon" />
              </div>
              <h2 className="column-title">Go to the Messages</h2>
              <p className="column-description">
                Stay connected and communicate with your real estate agent
                effortlessly.
              </p>
              <Link to={`/allmessenger/${user._id}`} className="cta-button">
                Access
              </Link>
            </div>
          </div>
        </section>
        <footer className="footer">
          <div className="footer-content">
            <ul>
              <li>
                <a href="#legal">Legal</a>
              </li>
              <li>
                <a href="#privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="#terms">Terms of Service</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    );
  }
}

export default HomePage;

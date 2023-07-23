import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import houseicon from "../images/houseIcon.png";
import messages from "../images/messenger.png";
import "../css/RealEstateHome.css";

function RealEstateHome() {
  const { user } = useContext(AuthContext);

  // if (!user) {
  //   return <p>Loading ...</p>;
  // } else {
  //   return (
  //     <div>
  //       <h1>Welcome {user.name}</h1>
  //       <Link to="/addProperty">Add new Property</Link>
  //       <Link to={`/realestateallproperties/${user._id}`}>
  //         See your properties
  //       </Link>
  //       <Link to={`/allmessenger/${user._id}`}>Go to the Messages</Link>
  //     </div>
  //   );
  // }

  if (!user) {
    return <p>Loading...</p>;
  } else {
    return (
      <div className="home-page">
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">Welcome, {user.name}!</h1>
          </div>
        </section>
        <section className="columns">
          <div className="column">
            <div className="column-content">
              <div className="icon">
                <img src={houseicon} alt="Steps Icon" />
              </div>
              <h2 className="column-title">Go to you properties</h2>
              <p className="column-description">
                Add, update and delete your properties.
              </p>
              <Link
                to={`/realestateallproperties/${user._id}`}
                className="cta-button"
              >
                Explore
              </Link>
            </div>
          </div>
          <div className="column">
            <div className="column-content">
              <div className="icon">
                <img src={messages} alt="Messages Icon" />
              </div>
              <h2 className="column-title">Go to the Messages</h2>
              <p className="column-description">
                Stay connected and communicate with your possible buyers
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

export default RealEstateHome;

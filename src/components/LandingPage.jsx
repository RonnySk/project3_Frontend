import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Dreamhouse from "../images/travel-cents-WYLuNY5JG4E-unsplash.jpg";
import Comparison from "./Comparison";

function LandingPage() {
  return (
    <div className="container">
      <main className="main">
        <section className="section1">
          <div className="text">
            <h1>Get Your Dream House Now</h1>
            <p>We simplify the home-buying process. Discover, tour, and buy your dream house with us.</p>
            <Link to="/steps" className="cta-button">
              Get Started
            </Link>

          </div>
          <div className="image">
            <img src={Dreamhouse} alt="Dream house" />
          </div>
        </section>

        <section className="section2">
          <div className="carousel-placeholder">
            <p>Carousel goes here</p>
          </div>
        </section>

        <section>
          <Comparison />
        </section>
      </main>

      <footer className="footer">
        <p>© 2023 Housing Done Right. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;

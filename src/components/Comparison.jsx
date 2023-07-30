import React from "react";
import "../App.css";
import NewImg from "../images/andrew-neel-ute2XAFQU2I-unsplash.jpg";
import OldImg from "../images/siora-photography-hgFY1mZY-Y0-unsplash.jpg";
import { Link } from "react-router-dom";

function Comparison() {
  return (
    <div className="comparison-container">
      <div className="column traditional">
        <h2 className="title">Traditional House Hunting</h2>
        <img className="image" src={OldImg} alt="Traditional House Hunting" />
        <ul className="negative-list">
          <li className="list-item">
            High costs associated with realtor fees and services
          </li>
          <li className="list-item">
            Limited selection of houses to view and choose from
          </li>
          <li className="list-item">
            Stressful negotiations and paperwork involved
          </li>
          <li className="list-item">
            Time-consuming visits to multiple properties
          </li>
        </ul>
        <p className="marketing-text">
          The traditional way of buying a house can be cumbersome, stressful,
          and costly. Realtor fees, limited choices, piles of paperwork, and
          time-consuming visits can make the process frustrating and slow down
          your move to your dream house.
        </p>
      </div>
      <div className="column generator">
        <h2 className="title">Housing Done Right</h2>
        <img className="image" src={NewImg} alt="Housing Done Right" />
        <ul className="positive-list">
          <li className="list-item">Wide range of properties to choose from</li>
          <li className="list-item">
            User-friendly platform to view and select houses
          </li>
          <li className="list-item">Transparent pricing with no hidden fees</li>
          <li className="list-item">
            Hassle-free process from viewing to purchase
          </li>
        </ul>
        <p className="marketing-text">
          "Housing Done Right" revolutionizes the home-buying process. Our
          platform offers a wide range of properties, an easy-to-use interface,
          transparent pricing, and a hassle-free process from start to finish.
          We strive to make the journey to your dream home as smooth and
          enjoyable as possible.
        </p>
      </div>
    </div>
  );
}

export default Comparison;

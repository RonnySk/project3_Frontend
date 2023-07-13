import React from "react";
import "../css/Step2.css";

function Step2Component() {
  return (
    <div className="step2-container">
      <div className="step2-content">
        <h1 className="step2-heading">Step 2: Find a Real Estate Agent</h1>
        <p className="step2-text">
          Finding the right real estate agent is crucial when buying a home. They can provide valuable expertise, guidance, and support throughout the
          home buying process. Here are some key factors to consider when choosing a real estate agent:
        </p>
        <ul className="step2-list">
          <li>Experience and expertise in the local market</li>
          <li>Professional qualifications and credentials</li>
          <li>Client testimonials and references</li>
          <li>Availability and responsiveness</li>
          <li>Good communication and negotiation skills</li>
          <li>Understanding of your needs and preferences</li>
          <li>Trustworthiness and integrity</li>
        </ul>
        <p className="step2-text">
          Take your time to research and interview different real estate agents. Consider asking for recommendations from friends, family, or trusted
          professionals. It's important to choose an agent who understands your requirements and has your best interests in mind.
        </p>
      </div>
    </div>
  );
}

export default Step2Component;

import React from "react";
import image from "../images/Mortgage.jpg";
import "../css/Step1.css";

function Step1Component() {
  return (
    <div className="step1-container">
      <div className="step1-content">
        <h1 className="step1-heading">Step 1: Find a Mortgage Advisor</h1>
        <p className="step1-text">
          Buying a home is a significant financial decision, and having a mortgage advisor can greatly assist you in navigating the complexities of
          the mortgage process.
        </p>
        <h2 className="step1-subheading">Why You Need a Mortgage Advisor</h2>
        <p className="step1-text">
          A mortgage advisor is a qualified professional who specializes in mortgage financing. They provide expert guidance and support throughout
          your home buying journey, helping you make informed decisions and find the best mortgage options tailored to your needs.
        </p>
        <p className="step1-text">Here's why you should consider working with a mortgage advisor:</p>
        <ul className="step1-list">
          <li>Access to a vast network of lenders and mortgage products</li>
          <li>Expert advice on interest rates, terms, and repayment options</li>
          <li>Assistance with mortgage pre-approval process</li>
          <li>Help in navigating complex paperwork and documentation</li>
          <li>Guidance in understanding and improving your creditworthiness</li>
          <li>Negotiation support to secure competitive mortgage terms</li>
          <li>Peace of mind knowing you have a trusted advisor on your side</li>
        </ul>
        <p className="step1-text">
          A mortgage advisor acts as your advocate, working to find the best mortgage solution that aligns with your financial goals and
          circumstances. Their expertise and industry knowledge can save you time, money, and potential headaches along the way.
        </p>
      </div>
      <div className="step1-image">
        <img src={image} alt="Step 1" className="step1-img" />
      </div>
    </div>
  );
}

export default Step1Component;

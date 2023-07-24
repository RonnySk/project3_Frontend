import React from "react";
import "../css/Step5.css";
import finalizingDeal from "../images/finalizing-deal.jpg";

function Step5Component() {
  return (
    <div className="step5-container">
      <div className="step5-content">
        <h1 className="step5-heading">Step 5: Finalizing the Deal</h1>
        <p className="step5-text">
          The final step of the home buying process involves several crucial steps that ensure a smooth transition to homeownership.
        </p>
        <h2 className="step5-subheading">Important Considerations</h2>
        <p className="step5-text">Consider the following during the finalization process:</p>
        <ul className="step5-list">
          <li>Home Inspection: Ensure the property is in good condition and identify potential issues.</li>
          <li>Home Insurance: Protect your new home from damage and provide liability coverage with a suitable policy.</li>
          <li>Final Walkthrough: This is your last chance to verify the property meets the agreed-upon conditions.</li>
          <li>Closing Costs: Understand all fees and expenses over and above the price of the property.</li>
          <li>Signing the Final Contract: This will legally bind you to the purchase agreement.</li>
        </ul>
        <p className="step5-text">
          Finalizing the deal is an exciting moment, but it's crucial to work closely with your mortgage advisor and real estate agent to avoid any
          pitfalls. This is the final stretch before you officially become a homeowner!
        </p>
      </div>
      <div className="step5-image">
        <img className="step5-img" src={finalizingDeal} alt="Finalizing the deal" />
      </div>
    </div>
  );
}

export default Step5Component;

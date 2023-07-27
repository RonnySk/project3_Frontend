import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CreateMessenger from "../messenger/CreateMessenger";
import Messenger from "../messenger/Messenger";
import "../css/Step4.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function Step4Component() {
  const [showMessenger, setShowMessenger] = useState(false);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChatStart = () => {
    setShowMessenger(true);
  };

  const handleBackToMessages = () => {
    navigate(`/allmessenger/${user._id}`);
  };

  return (
    <div className="step4-container">
      <div className="step4-content">
        {showMessenger ? (
          <Messenger />
        ) : (
          <>
            <h1 className="step4-heading">Step 4: Negotiate the Best Deal</h1>
            <p className="step4-text">
              Congratulations on reaching the negotiation stage of your home buying journey! This step is critical as it can significantly impact the
              terms and price of your dream home. A well-executed negotiation strategy can lead to substantial cost savings and ensure a successful
              purchase. Here are some key negotiation tactics to consider:
            </p>
            <ol className="step4-list">
              <li>
                Do Your Research: Knowledge is power in negotiations. Thoroughly research the local real estate market, recent property sales, and
                neighborhood trends. Understand the property's fair market value and use this information as leverage during negotiations.
              </li>
              <li>
                Set Clear Objectives: Define your objectives and priorities before entering negotiations. Determine the highest price you're willing
                to pay and the terms you find most favorable. Knowing your limits will help you stay focused during the negotiation process.
              </li>
              <li>
                Understand the Seller's Motivation: Try to understand the seller's motivations for selling the property. Are they in a hurry to close
                the deal? Are there any specific conditions that are crucial to them? Tailor your negotiation strategy to align with the seller's
                needs.
              </li>
              <li>
                Effective Communication: Maintain open and respectful communication with the seller or their agent. Listen actively to their concerns
                and articulate your points clearly. Building rapport can create a more positive negotiating environment.
              </li>
              <li>
                Use Non-Monetary Incentives: Negotiations aren't always just about the price. Consider offering non-monetary incentives, such as a
                flexible closing timeline or assuming certain responsibilities, to sweeten the deal for the seller.
              </li>
              <li>
                Stay Emotionally Intelligent: Keep emotions in check during negotiations. Avoid getting overly attached to a property, as it may cloud
                your judgment and weaken your negotiating position.
              </li>
              <li>
                Leverage Professional Representation: Consider enlisting the expertise of a skilled real estate agent or attorney who can negotiate on
                your behalf. Their experience and knowledge of the local market can be invaluable during this process.
              </li>
              <li>
                Be Prepared to Walk Away: While you may be enthusiastic about a particular property, be prepared to walk away if the terms don't align
                with your objectives. Demonstrating a willingness to walk away can enhance your negotiating position.
              </li>
              <li>
                Document Everything: Throughout the negotiation process, document all offers, counteroffers, and any agreed-upon terms in writing.
                Having a clear record of the negotiation's progression can prevent misunderstandings and disputes later on.
              </li>
              <li>
                Stay Committed to Win-Win: Aim for a win-win outcome where both parties feel satisfied with the deal. Building a positive and
                respectful relationship with the seller can lead to future benefits, such as smooth closing procedures and potential referrals.
              </li>
            </ol>

            <p className="step4-text">
              Remember, successful negotiations require a balance of assertiveness and collaboration. By employing these strategies, you'll be better
              equipped to navigate the negotiation process and secure the best possible deal for your new home.
            </p>

            <button type="button" onClick={handleBackToMessages}>
              Chat Start
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Step4Component;

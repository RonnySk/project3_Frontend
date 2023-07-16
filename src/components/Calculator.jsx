import React, { useState } from "react";
import axios from "axios";
import "../css/Calculator.css";
import { API_URL } from "../config/config.index";

function Calculator() {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [duration, setDuration] = useState("");
  const [calculatorData, setCalculatorData] = useState(null);

  const handleLoanAmount = (e) => setLoanAmount(e.target.value);
  const handleInterestRate = (e) => setInterestRate(e.target.value);
  const handleDuration = (e) => setDuration(e.target.value);

  const handleCalculatorSubmit = (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "X-Api-Key": process.env.REACT_APP_X_API_KEY,
      },
    };

    const url = `https://api.api-ninjas.com/v1/mortgagecalculator?loan_amount=${loanAmount}&interest_rate=${interestRate}&duration_years=${duration}`;

    axios
      .get(url, config)
      .then((response) => {
        setCalculatorData(response.data);
      })
      .catch((error) => {
        console.log("Error from Calculator API:", error);
      });
  };

  const handleSaveInfo = (e) => {
    e.preventDefault();

    const requestBody = {
      loanAmount,
      calculatorData,
    };

    axios
      .post(`${API_URL}/api/housingprofile`, requestBody)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="calculator-container">
      <h1 className="calculator-heading">Mortgage Calculator</h1>
      <form className="calculator-form" onSubmit={handleCalculatorSubmit}>
        <div className="form-group">
          <label htmlFor="loanAmount">Loan Amount</label>
          <input
            type="number"
            id="loanAmount"
            name="loanAmount"
            value={loanAmount}
            onChange={handleLoanAmount}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="interestRate">Interest Rate</label>
          <input
            type="number"
            id="interestRate"
            name="interestRate"
            value={interestRate}
            onChange={handleInterestRate}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="duration">Years</label>
          <input
            type="number"
            id="duration"
            name="duration"
            value={duration}
            onChange={handleDuration}
            required
          />
        </div>

        <button type="submit" className="calculator-button">
          Calculate
        </button>
      </form>

      {calculatorData && (
        <div className="calculator-results">
          <h3 className="calculator-result">
            Monthly Payment: {calculatorData.monthly_payment.total}
          </h3>
          <h3 className="calculator-result">
            Total Interest Rate: {calculatorData.total_interest_paid}
          </h3>
          <h3 className="calculator-result">
            Annual Payment: {calculatorData.annual_payment.total}
          </h3>

          <form className="calculator-form" onSubmit={handleSaveInfo}>
            <button type="submit" className="calculator-button">
              Save Info
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Calculator;

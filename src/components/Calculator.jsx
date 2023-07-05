import React, { useState } from "react";
import axios from "axios";

function Calculator() {
  const [loanAmount, setLoanAmount] = useState();
  const [interestRate, setInterestRate] = useState();
  const [duration, setDuration] = useState();
  const [calculatorData, setCalculatorData] = useState([]);

  const handleloanAmount = (e) => setLoanAmount(e.target.value);
  const handleinterestRate = (e) => setInterestRate(e.target.value);
  const handleduration = (e) => setDuration(e.target.value);

  const handleCalculatorSubmit = (e) => {
    e.preventDefault();

    const config = {
      headers: {
        // "X-Api-Key": `${process.env.X_API_KEY}`,
        "X-Api-Key": "Kp49p/WlYVEDj7PvUuMfzA==oLGVdjm3HJQql4SN",
      },
    };

    const url = `https://api.api-ninjas.com/v1/mortgagecalculator?loan_amount=${loanAmount}&interest_rate=${interestRate}&duration_years=${duration}`;

    axios
      .get(url, config)
      .then((response) => {
        setCalculatorData(response.data);
      })
      .catch((error) => {
        // const errorDescription = error.response.data.message;
        // setErrorMessage(errorDescription);
      });
  };

  console.log("Response from calculator API", calculatorData);

  return (
    <div>
      <h1>Mortgage Calculator</h1>

      <form onSubmit={handleCalculatorSubmit}>
        <label>Loan Amount</label>
        <input
          type="number"
          name="loanAmount"
          value={loanAmount}
          onChange={handleloanAmount}
        ></input>

        <label>Interest Rate</label>
        <input
          type="number"
          name="interestRate"
          value={interestRate}
          onChange={handleinterestRate}
        ></input>

        <label>Years</label>
        <input
          type="number"
          name="duration"
          value={duration}
          onChange={handleduration}
        ></input>

        <button type="submit">Calculate</button>
      </form>

      <h3>Monthly Payment: {calculatorData.monthly_payment.total}</h3>

      <h3>Annual Payment: {calculatorData.annual_payment.total}</h3>

      <h3>Total interest paid: {calculatorData.total_interest_paid}</h3>
    </div>
  );
}

export default Calculator;

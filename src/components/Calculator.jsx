import React, { useState } from "react";
import axios from "axios";

function Calculator() {
  const [loanAmount, setLoanAmount] = useState();
  const [interestRate, setInterestRate] = useState();
  const [duration, setDuration] = useState();

  const handleloanAmount = (e) => setLoanAmount(e.target.value);
  const handleinterestRate = (e) => setInterestRate(e.target.value);
  const handleduration = (e) => setDuration(e.target.value);

  const handleCalculatorSubmit = (e) => {
    e.preventDefault();
    // const requestBody = { loanAmount, interestRate, duration };

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
        console.log("Response from calculator API", response.data);
      })
      .catch((error) => {
        // const errorDescription = error.response.data.message;
        // setErrorMessage(errorDescription);
      });
  };

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
    </div>
  );
}

export default Calculator;

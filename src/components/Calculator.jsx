import React, { useState } from "react";
import axios from "axios";

function Calculator() {
  const [loanAmount, setLoanAmount] = useState();
  const [interestRate, setInterestRate] = useState();
  const [duration, setDuration] = useState();

  return (
    <div>
      <h1>Mortgage Calculator</h1>

      <form>
        <label>Loan Amount</label>
        <input
          type="number"
          name="loanAmount"
          value={loanAmount}
          //   onChange={handleloanAmount}
        ></input>

        <label>Interest Rate</label>
        <input
          type="number"
          name="interestRate"
          value={interestRate}
          //   onChange={handleinterestRate}
        ></input>

        <label>Years</label>
        <input
          type="number"
          name="duration"
          value={duration}
          //   onChange={handleduration}
        ></input>
      </form>
    </div>
  );
}

export default Calculator;

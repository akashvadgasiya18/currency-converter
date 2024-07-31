import React, { useState } from "react";
import "../App.css";
import CurrencySelect from "./CurrencySelect";

const Currency = () => {
  const [amount, setAmount] = useState(100);
  const [fromCurrency, setFromCurr] = useState("USD");
  const [toCurrency, setToCurr] = useState("INR");
  const [result, setResult] = useState("");

  const handleSwapCurrency = () => {
    setFromCurr(toCurrency);
    setToCurr(fromCurrency);
  };

  const getExchangeRate = async () => {
    const API_KEY = "533cc78a480e6706cd1e3b92";
    const API_URL = ` https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromCurrency}/${toCurrency}`;

    try {
      const response = await fetch(API_URL);

      if (!response.ok) throw Error("Something went wrong...");

      const data = await response.json();

      const rate = (data.conversion_rate * amount).toFixed(2);

      setResult(`${amount} ${fromCurrency} = ${rate} ${toCurrency}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getExchangeRate();
  };

  return (
    <>
      <form action="" className="converter-form" onSubmit={handleSubmit}>
        <div className="form-grp">
          <lable className="form-label">Enter Amount</lable>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            id=""
            className="form-input"
          />
        </div>
        <div className="form-grp form-curr-grp">
          <div className="form-section">
            <label htmlFor="" className="form-label">
              From
            </label>
            <CurrencySelect
              selectedCurr={fromCurrency}
              handleCurrency={(e) => setFromCurr(e.target.value)}
            />
          </div>

          <div className="swap" onClick={handleSwapCurrency}>
            <svg
              width="16"
              viewBox="0 0 20 19"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.13 11.66H.22a.22.22 0 0 0-.22.22v1.62a.22.22 0 0 0 .22.22h16.45l-3.92 4.94a.22.22 0 0 0 .17.35h1.97c.13 0 .25-.06.33-.16l4.59-5.78a.9.9 0 0 0-.7-1.43zM19.78 5.29H3.34L7.26.35A.22.22 0 0 0 7.09 0H5.12a.22.22 0 0 0-.34.16L.19 5.94a.9.9 0 0 0 .68 1.4H19.78a.22.22 0 0 0 .22-.22V5.51a.22.22 0 0 0-.22-.22z"
                fill="#fff"
              />
            </svg>
          </div>
          <div className="form-section">
            <label htmlFor="" className="form-label">
              To
            </label>
            <CurrencySelect
              selectedCurr={toCurrency}
              handleCurrency={(e) => setToCurr(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" className="submit-btn">
          Get Exchange
        </button>

        <p className="exchange-rate-result">{result}</p>
      </form>
    </>
  );
};

export default Currency;

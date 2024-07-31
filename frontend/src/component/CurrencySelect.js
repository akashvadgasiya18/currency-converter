import React from "react";
import CurrencyCodes from "./CurrencyCode";

const CurrencySelect = ({ selectedCurr, handleCurrency }) => {
  const countryCode = selectedCurr.substring(0, 2);
  return (
    <>
      <div className="currency-select">
        <img
          src={`https://flagsapi.com/${countryCode}/flat/64.png`}
          alt="flag"
          srcset=""
        />
        <select
          className="curr-drop"
          value={selectedCurr}
          onChange={handleCurrency}
        >
          {CurrencyCodes.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default CurrencySelect;

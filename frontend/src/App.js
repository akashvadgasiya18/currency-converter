import React from "react";
import Currency from "./component/Currency";

const App = () => {
  return (
    <>
      <div className="currency-con">
        <h1 className="conv-title">Currency Converter</h1>
        <Currency />
      </div>
    </>
  );
};

export default App;

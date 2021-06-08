import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, handleAddStock }) {
  function populateStocks() {
    return stocks.map((stock, idx) => (
      <Stock stock={stock} key={`stock-${idx}`} handleChangeStock={handleAddStock} />
    ));
  }

  return (
    <div>
      <h2>Stocks</h2>
      {stocks && populateStocks()}
    </div>
  );
}

export default StockContainer;
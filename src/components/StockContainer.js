import React, { useEffect, useState } from "react";
import Stock from "./Stock";

function StockContainer({ onHandleAddStock, stocks }) {
  if (stocks === null) {
    return (
      <div>
        <h2>Stocks</h2>
        <Stock
          key="Loading..."
          ticker="Loading..."
          name="Loading..."
          price="Loading..."
        />
      </div>
    );
  }

  const renderedStocks = stocks.map((stock) => {
    return (
      <Stock
        key={stock.id}
        ticker={stock.ticker}
        name={stock.name}
        price={stock.price}
        onHandleStock={onHandleAddStock}
      />
    );
  });

  return (
    <div>
      <h2>Stocks</h2>
      {renderedStocks}
    </div>
  );
}

export default StockContainer;

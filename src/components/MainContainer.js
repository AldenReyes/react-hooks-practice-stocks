import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [portfolioStocks, setPortfolioStocks] = useState([]);
  const [stocks, setStocks] = useState(null);

  const fetchStocksData = async () => {
    try {
      const response = await fetch("http://localhost:3001/stocks");
      const data = await response.json();
      setStocks(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchStocksData();
  }, []);

  const handleAddStock = () => {
    console.log("click");
  };

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer onHandleAddStock={handleAddStock} stocks={stocks} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolioStocks={portfolioStocks} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;

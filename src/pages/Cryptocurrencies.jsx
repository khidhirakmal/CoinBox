import React, { useEffect, useState } from "react";
import homeStore from "../stores/homeStore";
import Header from "../components/Header";
import TrendingCoins from "../components/TrendingCoins";
import NavBar from "../components/NavBar";
import CryptoStats from "../components/CryptoStats";

export default function Cryptocurrencies() {
  const store = homeStore();

  const [showTrendingCoins, setShowTrendingCoins] = useState(true);

  const handleSearchInputChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue === "") {
      setShowTrendingCoins(true);
    } else {
      setShowTrendingCoins(false);
    }
    if (store.setQuery) {
      store.setQuery(inputValue);
    }
  };

  useEffect(() => {
    store.fetchCoins();
  }, []);

  return (
    <div>
      <CryptoStats />
      <Header />
      <NavBar />
      {showTrendingCoins ? (
        <div className="trendingTitle">Cryptocurrencies</div>
      ) : (
        <div className="trendingTitle">Search Results</div>
      )}
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search"
          value={store.query}
          onChange={handleSearchInputChange}
        />
      </div>
      <div className="coinsContainer">
        <div className="coinsContainerHeader">
          <h4 className="coin">Coin</h4>
          <h4 className="price">Price</h4>
        </div>
      </div>
    </div>
  );
}

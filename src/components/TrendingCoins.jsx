import React from "react";
import { Link } from "react-router-dom";

export default function TrendingCoins({ coin }) {
  // console.log(coin);
  return (
    <div className="trendingCoins">
      <Link to={`/${coin.id}`}>
        <span className="trendingImage">
          <img src={coin.image} />
        </span>
        <span className="trendingName">
          {coin.name} 
          {/* <span className="rank">#{coin.rank}</span> */}
        </span>
        <span className="trendingPrice">US${coin.priceUSD}</span>
      </Link>
    </div>
  );
}

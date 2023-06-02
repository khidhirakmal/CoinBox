import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navBar">
      <div>
        <span>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </span>
        <span>
          <Link to="/nft">NFT</Link>
        </span>
        <span>
          <Link to="/watchlist">Watchlist</Link>
        </span>
      </div>
    </nav>
  );
}

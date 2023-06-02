import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import CryptoStats from "../components/CryptoStats";

export default function NFT() {
  return (
    <div>
      <CryptoStats />
      <Header />
      <NavBar />

      <div className="trendingTitle">Watchlist</div>
    </div>
  );
}

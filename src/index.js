import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./style.scss";
import CoinData from "./components/CoinData";
import Cryptocurrencies from "./pages/Cryptocurrencies";
import Watchlist from "./pages/Watchlist";
import NFT from "./pages/NFT";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/:id" element={<CoinData />} />
      <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
      <Route path="/watchlist" element={<Watchlist />} />
      <Route path="/nft" element={<NFT />} />
    </Routes>
  </BrowserRouter>
);

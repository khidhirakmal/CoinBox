import React, { useEffect } from "react";
import globalStore from "../stores/globalStore";

export default function GlobalData() {
  const { globalData, fetchGlobal } = globalStore();

  useEffect(() => {
    fetchGlobal();
  }, []);

  const getValue = (name) => {
    const item = globalData.find((item) => item.name === name);
    return item ? item.value : "";
  };

  return (
    <div className="cryptoStats">
      <span>Coins: {getValue("allCoins")}</span>
      <span>Exchanges: {getValue("exchanges")}</span>
      <span>Market Cap: ${getValue("marketCap").toLocaleString()}</span>
      <span>Dominance:</span>
      <span>BTC {getValue("btcDom").toLocaleString()}%</span>
      <span>ETH {getValue("ethDom").toLocaleString()}%</span>
      <span>BNB {getValue("bnbDom").toLocaleString()}%</span>
    </div>
  );
}

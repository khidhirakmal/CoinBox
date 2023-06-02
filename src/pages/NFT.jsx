import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import CryptoStats from "../components/CryptoStats";
import nftStore from "../stores/nftStore";

export default function NFT() {
  const store = nftStore();

  useEffect(() => {
    store.fetchNFT();
  }, []);

  return (
    <div>
      <CryptoStats />
      <Header />
      <NavBar />
      <div className="trendingTitle">NFT</div>
      <div className="nftContainer">
        {store.nft.map((nft) => (
          <NFT key={nft.id}/>
        ))}
      </div>
    </div>
  );
}

import React, { useEffect } from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import GlobalData from "../components/GlobalData";
import nftStore from "../stores/nftStore";
import NFTList from "../components/NFTList";

export default function NFT() {
  // const store = nftStore((state) => state);

  // useEffect(() => {
  //   store.fetchNFT();
  // }, []);

  const { nfts, fetchNFT } = nftStore((state) => ({
    nfts: state.nfts,
    fetchNFT: state.fetchNFT,
  }));

  useEffect(() => {
    fetchNFT();
  }, []);

  return (
    <div>
      <GlobalData />
      <Header />
      <NavBar />

      <div className="trendingTitle">NFT</div>
      <div className="nftContainer">
        {nfts.map((nft) => (
          <NFTList key={nft.id} nft={nft} />
        ))}
      </div>
    </div>
  );
}

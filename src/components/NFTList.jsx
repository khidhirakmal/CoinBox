import React from "react";
import { Link } from "react-router-dom";

export default function NFTList({ nft }) {
//   console.log(nft);
  return (
    <div className="nftList">
      <Link to={`/${nft.id}`}>
        <span className="nftName">{nft.name}</span>
      </Link>
    </div>
  );
}

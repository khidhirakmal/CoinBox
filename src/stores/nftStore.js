import { create } from "zustand";
import axios from "axios";

const nftStore = create((set) => ({
  nft: [],

  fetchNFT: async () => {
    const resNFT = await axios.get(
      `https://api.coingecko.com/api/v3/nfts/list?order=market_cap_usd_desc&per_page=20`
    );

    set({ nft: resNFT.data }); // update the state with the fetched data

    console.log(resNFT); // log the response
    console.log(resNFT); // log the response
  },
}));

export default nftStore;

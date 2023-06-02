import { create } from "zustand";
import axios from "axios";

const nftStore = create((set) => ({
  nfts: [],
  nftData: [],

  fetchNFT: async () => {
    const resNFT = await axios.get(
      `https://api.coingecko.com/api/v3/nfts/list?order=market_cap_usd_desc&per_page=5`
    );

    const nfts = resNFT.data.map((nft) => {
      return {
        name: nft.name,
        id: nft.id,
      };
    });

    const nftDataPromises = nfts.map((nft) =>
      axios.get(`https://api.coingecko.com/api/v3/nfts/${nft.id}`)
    );

    const resNFTdata = await Promise.all(nftDataPromises);

    const nftData = resNFTdata.map((data) => {
      return {
        id: data.data.id,
        floor: data.data.floor_price.usd,
      };
    });

    set({ nfts: nfts, nftData: nftData });
  },
}));

export default nftStore;

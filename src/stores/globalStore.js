import { create } from "zustand";
import axios from "axios";

const globalStore = create((set) => ({

  fetchNFT: async () => {
    const resNFT = await axios.get(
      `https://api.coingecko.com/api/v3/nfts/list?order=market_cap_usd_desc&per_page=5`
    );


      return {

      };



    set({  });
  },
}));

export default globalStore;

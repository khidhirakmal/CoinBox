import { create } from "zustand";
import axios from "axios";

const globalStore = create((set) => ({
  globalData: [],

  fetchGlobal: async () => {
    const res = await axios.get(`https://api.coingecko.com/api/v3/global`);
    console.log(res);

    const globalData = [
      { name: "allCoins", value: res.data.data.active_cryptocurrencies },
      { name: "exchanges", value: res.data.data.markets },
      { name: "marketCap", value: res.data.data.total_market_cap.usd },
      { name: "btcDom", value: res.data.data.market_cap_percentage.btc },
      { name: "ethDom", value: res.data.data.market_cap_percentage.eth },
      { name: "bnbDom", value: res.data.data.market_cap_percentage.bnb },
    ];

    set({ globalData });

    return globalData;
  },
}));

export default globalStore;

import { create } from "zustand";
import axios from "axios";
import debounce from "./helper/debounce";

const homeStore = create((set) => ({
  coins: [],
  trending: [],
  query: "",

  setQuery: (inputValue) => {
    set((state) => ({ query: inputValue }));
    homeStore.getState().searchCoins();
  },

  searchCoins: debounce(async () => {
    const { query, trending } = homeStore.getState();

    if (query.length > 1) {
      const res = await axios.get(
        `https://api.coingecko.com/api/v3/search?query=${query}`
      );
      console.log(res);

      const coins = res.data.coins.map((coin) => {
        return {
          name: coin.name,
          image: coin.large,
          id: coin.id,
          priceUSD: coin.market_cap_rank,
        };
      });

      set({ coins: coins });
    } else {
      set({ coins: trending });
    }
  }, 500),

  fetchCoins: async () => {
    const [btcRes, trendRes] = await Promise.all([
      axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_market_cap=true`
      ),
      axios.get(`https://api.coingecko.com/api/v3/search/trending`),
    ]);

    const coins = trendRes.data.coins.map((coin) => {
      const btcUSD = btcRes.data.bitcoin.usd;
      const coinPriceBTC = coin.item.price_btc;
      const coinPriceUSD = coinPriceBTC * btcUSD;
      const priceFormat =
        coinPriceUSD >= 1
          ? coinPriceUSD.toFixed(2)
          : coinPriceUSD.toPrecision(3);
          // console.log(trendRes.data.coins)

      return {
        name: coin.item.name,
        image: coin.item.large,
        id: coin.item.id,
        priceUSD: priceFormat,
      };
    });

    set({ coins, trending: coins });

    // console.log(res);
    // console.log(coins);
  },
}));

export default homeStore;

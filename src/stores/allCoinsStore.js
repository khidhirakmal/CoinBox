import { create } from "zustand";
import axios from "axios";

const allCoinsStore = create((set) => ({
  coins: [],

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

      return {
        name: coin.item.name,
        image: coin.item.large,
        id: coin.item.id,
        priceUSD: priceFormat,
      };
    });

    set({ coins });

    // console.log(res);
    // console.log(coins);
  },
}));

import { create } from "zustand";
import axios from "axios";

const coinDataStore = create((set) => ({
  chartData: [],
  loading: true,

  fetchData: async (id) => {
    try {
      set({ loading: true });

      const [chartRes, dataRes] = await Promise.all([
        axios.get(
          `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=30&interval=daily`
        ),
        axios.get(
          `https://api.coingecko.com/api/v3/coins/${id}?localization=false&market_data=true`
        ),
      ]);

      const chartData = chartRes.data.prices.map((coin) => {
        const [timeStamp, price] = coin;
        const date = new Date(timeStamp).toLocaleDateString("en-gb", {
          day: "2-digit",
          month: "2-digit",
        });

        return {
          date: date,
          price: price,
        };
      });

      const coinData = dataRes.data;
      // console.log(coinData);
      // console.log(chartRes);

      set({ chartData, coinData, loading: false });
    } catch (error) {
      console.error(error);
    }
  },
}));

export default coinDataStore;

import React, { useEffect } from "react";
import coinDataStore from "../stores/coinDataStore";
import { useParams } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Header from "./Header";
import CryptoStats from "./CryptoStats";
import NavBar from "./NavBar";

export default function CoinData() {
  const store = coinDataStore();
  const params = useParams();

  useEffect(() => {
    store.fetchData(params.id);
  }, []);

  if (store.loading) return <div className="loading">Loading...</div>; 

  const coinPrice = store.coinData.market_data.current_price.usd;
  const coinPriceFormat =
    coinPrice >= 1 ? coinPrice.toFixed(2) : coinPrice.toPrecision(3);

  const marketCap = store.coinData.market_data.market_cap.usd.toLocaleString();

  const maxSupply = store.coinData.market_data.max_supply;
  const maxSupplyCheck = maxSupply ? maxSupply.toLocaleString() : "∞";
  const cirSupply = store.coinData.market_data.circulating_supply;
  const supplyPercentage = ((cirSupply / maxSupply) * 100).toFixed(2);

  const priceChange =
    store.coinData.market_data.price_change_percentage_30d_in_currency.usd;
  const priceChangeCheck = priceChange ? priceChange.toFixed(2) : "-";

  return (
    <div>
      <CryptoStats />
      <Header back />
      <NavBar />
      <header className="show-header">
        <img
          src={store.coinData.image.large}
          alt={`${store.coinData.id} icon`}
        />
        <h2>
          <span className="show-header-coinName">{store.coinData.name}</span>
          <span className="show-header-coinTicker">
            {" "}
            {store.coinData.symbol}
          </span>
        </h2>
        {console.log(store.coinData)}
        <div className="show-header-coinPrice">
          <h3>${coinPriceFormat}</h3>
        </div>
      </header>

      <div className="show-details">
        <div className="show-details-block">
          <div className="block">
            <div className="details">
              <h3>Rank</h3>
              <span>#{store.coinData.market_cap_rank}</span>
            </div>
            <div className="details">
              <h3>Market Cap</h3>${marketCap}
            </div>
            <div className="details">
              <h3>Trading Volume (24H)</h3>$
              {store.coinData.market_data.total_volume.usd.toLocaleString()}
            </div>
          </div>
          <div className="block">
            <div className="details">
              <h3>All-Time High</h3>
              <span>${store.coinData.market_data.ath.usd}</span>
            </div>
            <div className="details">
              <h3>24 Hour High</h3>
              <span>${store.coinData.market_data.high_24h.usd}</span>
            </div>
            <div className="details">
              <h3>24 Hour Low</h3>
              <span>${store.coinData.market_data.low_24h.usd}</span>
            </div>
          </div>
          <div className="block">
            <div className="details">
              <h3>Circulating Supply</h3>
              <span>
                {store.coinData.market_data.circulating_supply.toLocaleString()}{" "}
                ({supplyPercentage}%)
              </span>
            </div>
            {/* <div className="details">
              <h3>Total Supply</h3>
              <span>
                {store.coinData.market_data.total_supply.toLocaleString()}
              </span>
            </div> */}

            <div className="details">
              <h3>Max Supply</h3>
              <span>{maxSupplyCheck}</span>
            </div>
            <div className="details">
              <h3>Official Page</h3>
              <a href={store.coinData.links.homepage[0]}>
                {store.coinData.links.homepage[0]}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="show-graph">
        <div className="graph-title">
          <h3>Price Change (30 Days)</h3>
          <span>{priceChangeCheck}%</span>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            // width={800}
            // height={300}
            data={store.chartData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis
              type="number"
              domain={[
                store.coinData.market_data.current_price.usd / 2,
                store.coinData.market_data.current_price.usd * 1.25,
              ]}
            />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

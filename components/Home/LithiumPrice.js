import axios from "axios";
import { se } from "date-fns/locale";
import React, { useState, useEffect } from "react";

const LithiumPrice = () => {
  // const [lithiumData, setLithiumData] = useState(null);
  const [goldData, setGoldData] = useState(null);
  const [goldSpotPrice, setGoldSpotPrice] = useState(null);
  const [change, setChange] = useState(null);
  const [changePercentage, setChangePercentage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getPrice() {
      try {
        setLoading(true);
        const res = await axios.get(
          "https://spot-scrapper-production.up.railway.app/api/spot-prices",
        );
        // console.log("jancjksdjcnj", res.data);
        const allPrices = res.data.data.metals;
        const gp = allPrices.find((i) => {
          return i.name == "Gold";
        });
        setGoldData(gp);
        // console.log("gp", gp);
        const goldSpotPrice = calcSpot(
          parseFloat(gp.bid.replace(/,/g, "")),
          parseFloat(gp.ask.replace(/,/g, "")),
        );
        // console.log("goldSpotPrice", goldSpotPrice);
        setGoldSpotPrice(goldSpotPrice);
        setChange(parseFloat(gp.change.replace(/,/g, "")));
        setChangePercentage(
          parseFloat(gp.changePercent.replace(/%/g, "").replace(/,/g, "")),
        );
      } catch (error) {
        console.error("Error fetching gold price data:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getPrice();
  }, []);

  const calcSpot = (bid, ask) => {
    let res = (bid + ask) / 2;
    return res;
  };

  if (loading) {
    return (
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 mt-4 rounded-lg max-w-3xl">
        <div className="hidden lg:flex flex-row gap-10">
          <div className="text-center lg:text-left">
            <div className="h-4 w-32 bg-zinc-200 rounded animate-pulse mb-2" />
            <div className="h-4 w-20 bg-zinc-200 rounded animate-pulse" />
          </div>
          <div className="text-center lg:text-left">
            <div className="h-4 w-16 bg-zinc-200 rounded animate-pulse mb-2" />
            <div className="h-4 w-14 bg-zinc-200 rounded animate-pulse" />
          </div>
          <div className="text-center lg:text-left">
            <div className="h-4 w-20 bg-zinc-200 rounded animate-pulse mb-2" />
            <div className="h-4 w-14 bg-zinc-200 rounded animate-pulse" />
          </div>
        </div>

        <div className="lg:hidden space-y-2">
          <div className="h-4 w-48 bg-zinc-200 rounded animate-pulse" />
          <div className="h-4 w-32 bg-zinc-200 rounded animate-pulse" />
          <div className="h-4 w-28 bg-zinc-200 rounded animate-pulse" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 mt-4 rounded-lg max-w-3xl">
        <div className=" text-red-400">
          <p>CME Gold spot price data unavailable at this moment</p>
          <p className="text-sm text-gray-400">
            Here only real data is shown , no fallback data
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 mt-4 rounded-lg max-w-3xl">
      <div className="hidden lg:flex flex-row gap-10">
        <div className="text-center lg:text-left">
          <h2 className="text-base font-bold text-white">
            Gold & Silver Spot Price
          </h2>
          <p className="text-base mt-1">${goldSpotPrice}</p>
        </div>
        <div className="text-center lg:text-left">
          <h2 className="text-base font-bold text-white">Change</h2>
          <p
            className={`text-base mt-1 ${
              parseFloat(change) > 0 ? "text-green-400" : "text-red-400"
            }`}
          >
            ${change}
          </p>
        </div>
        <div className="text-center lg:text-left">
          <h2 className="text-base font-bold text-white">% Change</h2>
          <p
            className={`text-base mt-1 ${
              parseFloat(changePercentage) > 0
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {parseFloat(changePercentage) > 0
              ? `+${changePercentage}%`
              : `${changePercentage}%`}
          </p>
        </div>
      </div>
      <div className="lg:hidden space-y-2">
        <p className="text-base font-bold text-white">
          Gold & Silver Spot Price:{" "}
          <span className="font-normal">${goldSpotPrice}</span>
        </p>

        <p className="text-base font-bold text-white">
          Change:{" "}
          <span
            className={`${
              parseFloat(change) > 0 ? "text-green-400" : "text-red-400"
            } font-normal`}
          >
            ${change}
          </span>
        </p>
        <p className="text-base font-bold text-white">
          Change %:{" "}
          <span
            className={`${
              parseFloat(changePercentage) > 0
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {parseFloat(changePercentage) > 0
              ? `+${changePercentage}%`
              : `${changePercentage}%`}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LithiumPrice;

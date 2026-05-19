import axios from "axios";
import React, { useState, useEffect } from "react";

const GoldPrice = () => {
  const [GoldData, setGoldData] = useState(null);

  useEffect(() => {
    async function getData() {
      const response = await axios.get("/api/cme-lithium-spot");
      console.log(response.data);
      if (!response.data) {
        setGoldData([]);
      }
      setGoldData(response.data[0]);
    }
    getData();
  }, []);
  // If GoldData is not yet available, render a loading state
  if (!GoldData) {
    return (
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 mt-4 rounded-lg max-w-3xl">
        <div className="text-center text-red-400">
          <p>CME Gold spot price data unavailable</p>
          <p className="text-sm text-gray-400">
            Real-time data only - no fallback data
          </p>
        </div>
      </div>
    );
  }

  // Extract and format the required values, with fallback to 0.00 if data is invalid
  const price = GoldData.price ? parseFloat(GoldData.price) : 0;
  const GoldSpotPrice =
    price > 1000
      ? price.toLocaleString("en-US", {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })
      : price.toFixed(4);

  const changeValue = GoldData.day_change ? parseFloat(GoldData.day_change) : 0;
  const change =
    changeValue > 1000
      ? changeValue.toLocaleString("en-US", {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })
      : changeValue.toFixed(4);

  const changePercentage = GoldData.percent_change ?? "0%";

  // Format the change to display the dollar sign before the negative sign if necessary
  const formattedChange = `${changeValue > 0 ? "+" + change : change}`;
  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 mt-4 rounded-lg max-w-3xl">
      {/* Large Screen Layout */}
      <div className="hidden lg:flex flex-row gap-10">
        <div className="text-center lg:text-left">
          <h2 className="text-base font-bold text-white">Gold Spot Price</h2>
          <p className="text-base mt-1">${GoldSpotPrice}</p>
        </div>
        <div className="text-center lg:text-left">
          <h2 className="text-base font-bold text-white">Change</h2>
          <p
            className={`text-base mt-1 ${
              parseFloat(change) > 0 ? "text-green-400" : "text-red-400"
            }`}
          >
            {formattedChange}
          </p>
        </div>
        {/* Change Percentage */}
        <div className="text-center lg:text-left">
          <h2 className="text-base font-bold text-white">% Change</h2>
          <p
            className={`text-base mt-1 ${
              parseFloat(changePercentage) > 0
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {changePercentage}
          </p>
        </div>
      </div>

      {/* Small Screen Layout */}
      <div className="lg:hidden space-y-2">
        <p className="text-base font-bold text-white">
          <span className="font-normal">¥{GoldSpotPrice}</span>
        </p>

        <p className="text-base font-bold text-white">
          Change:{" "}
          <span
            className={`${
              parseFloat(change) > 0 ? "text-green-400" : "text-red-400"
            } font-normal`}
          >
            {formattedChange}
          </span>
        </p>
        <p className="text-base font-bold text-white">
          Change %:{" "}
          <span
            className={`${
              parseFloat(changePercentage) > 0
                ? "text-green-400"
                : "text-red-400"
            } font-normal`}
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

export default GoldPrice;

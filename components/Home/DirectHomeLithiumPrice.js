import React, { useState, useEffect } from "react";
import { FaLink } from "react-icons/fa6";

const DirectHomeLithiumPrice = () => {
  const [lithiumPrices, setLithiumPrices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPricesFromDatabase = async () => {
      try {
        setLoading(true);

        // Fetch metal prices from our database API
        const response = await fetch("/api/lithium-prices");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (!data.success || !data.data) {
          throw new Error("No metal price data available from database");
        }

        // Ensure data.data is an array
        const dataArray = Array.isArray(data.data) ? data.data : [data.data];

        if (dataArray.length === 0) {
          throw new Error("No metal price data available from database");
        }

        // Transform database data to component format
        const metalPrices = dataArray.map((item) => ({
          metal_name: item.metal_name,
          price: parseFloat(item.price),
          price_change: parseFloat(item.price_change),
          price_change_percent: parseFloat(item.price_change_percent),
        }));

        setLithiumPrices(metalPrices);
      } catch (err) {
        console.error("Error fetching prices from database:", err);
        setError(err.message);

        // Fallback to mock data
        const fallbackData = [
          {
            metal_name: "Lithium",
            price: 4.15,
            price_change: -0.08,
            price_change_percent: -1.89,
          },
          {
            metal_name: "Aluminum",
            price: 0.91,
            price_change: -0.02,
            price_change_percent: -1.51,
          },
          {
            metal_name: "Gold",
            price: 8.51,
            price_change: -0.16,
            price_change_percent: -2.27,
          },
          {
            metal_name: "Zinc",
            price: 1.25,
            price_change: -0.02,
            price_change_percent: -1.7,
          },
        ];
        setLithiumPrices(fallbackData);
      } finally {
        setLoading(false);
      }
    };

    fetchPricesFromDatabase();

    // Refresh every 2 minutes
    const interval = setInterval(fetchPricesFromDatabase, 2 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const formatValue = (value) => {
    if (value === null || value === undefined || isNaN(value)) {
      return "0.00";
    }
    return parseFloat(value).toFixed(4);
  };

  const getChangeClass = (value) => {
    if (value > 0) return "text-green-500";
    if (value < 0) return "text-red-500";
    return "text-black";
  };

  const renderRow = (metalData) => (
    <tr className="text-sm hover:bg-accent/10" key={metalData.metal_name}>
      <td className="border-t px-7 py-3 font-sm">{metalData.metal_name}</td>
      <td className="border-t px-7 py-4">${formatValue(metalData.price)}</td>
      <td
        className={`border-t px-7 py-3 ${getChangeClass(
          parseFloat(metalData.price_change),
        )}`}
      >
        {metalData.price_change > 0
          ? `$+${formatValue(metalData.price_change)}`
          : metalData.price_change < 0
            ? `${formatValue(metalData.price_change)}`
            : `$0.0000`}
      </td>
      <td
        className={`border-t px-8 py-4 ${getChangeClass(
          parseFloat(metalData.price_change_percent),
        )}`}
      >
        {formatValue(metalData.price_change_percent)}%
      </td>
    </tr>
  );

  if (loading) {
    return (
      <div className="overflow-x-auto custom-scrollbar-hidden">
        <table className="table-auto w-full border-collapse text-md">
          <thead className="text-left">
            <tr className="text-black/60">
              <th className="border-t px-7 py-4">Metal</th>
              <th className="border-t px-7 py-4">Price (USD/oz)</th>
              <th className="border-t px-7 py-4">Change</th>
              <th className="border-t px-7 py-4">% Change</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 3 }).map((_, index) => (
              <tr key={index} className="animate-pulse">
                <td className="border-t px-7 py-4">
                  <div className="h-4 w-24 bg-zinc-200 rounded" />
                </td>
                <td className="border-t px-7 py-4">
                  <div className="h-4 w-28 bg-zinc-200 rounded" />
                </td>
                <td className="border-t px-7 py-4">
                  <div className="h-4 w-20 bg-zinc-200 rounded" />
                </td>
                <td className="border-t px-7 py-4">
                  <div className="h-4 w-16 bg-zinc-200 rounded" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pt-4 pb-2 border-t text-xs text-gray-500 text-center">
          <div className="h-3 w-56 bg-zinc-200 rounded animate-pulse mx-auto" />
        </div>
      </div>
    );
  }

  if (error && lithiumPrices.length === 0) {
    return (
      <div className="text-center py-4 text-red-500">
        Error: {error}
        <p className="text-sm text-gray-600 mt-2">Using fallback data</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto  custom-scrollbar-hidden">
      <table className="table-auto w-full border-collapse text-md">
        <thead className="text-left">
          <tr className="text-black/60">
            <th className="border-t px-7 py-4">Metal</th>
            <th className="border-t px-7 py-4">Price (USD/oz)</th>
            <th className="border-t px-7 py-4">Change</th>
            <th className="border-t px-7 py-4">% Change</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(lithiumPrices) && lithiumPrices.length > 0 ? (
            lithiumPrices.map((metalData) => renderRow(metalData))
          ) : (
            <tr>
              <td colSpan="4" className="text-center py-5 text-gray-500">
                No price data available
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {error && (
        <div className="mt-2 text-xs text-orange-600 text-center">
          Note: Some data may be simulated due to API restrictions
        </div>
      )}

      <div className=" pt-4 pb-2 border-t text-xs text-gray-500 text-center">
        Last updated: {new Date().toLocaleTimeString()} • Auto-refresh: 2 min
      </div>
    </div>
  );
};

export default DirectHomeLithiumPrice;

import React, { useState, useEffect } from "react";

const HomeInsiderTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch("/api/insider-transactions/");
        if (!response.ok) {
          throw new Error("Failed to fetch insider transactions");
        }
        const data = await response.json();

        // Filter for Canadian transactions and limit to 10 most recent
        const canadianTransactions = data
          .filter((t) => t.country === "Canada")
          .slice(0, 10);

        setTransactions(canadianTransactions);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching insider transactions:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="text-left overflow-x-auto custom-scrollbar-hidden border border-black/10 rounded-lg pl-2 pt-3 mb-3 pr-3">
        <table className="table-auto w-full border-collapse text-md">
          <thead>
            <tr className="text-black/60">
              <th className="px-5 py-2">Country</th>
              <th className="px-10 py-2">Company</th>
              <th className="px-10 py-2">Ticker</th>
              <th className="px-10 py-2">Insider</th>
              <th className="px-10 py-2">Title</th>
              <th className="px-10 py-2">Type</th>
              <th className="px-10 py-2">Price</th>
              <th className="px-10 py-2">Qty</th>
              <th className="px-10 py-2">Amount</th>
              <th className="px-10 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 10 }).map((_, index) => (
              <tr key={index} className="animate-pulse">
                <td className="border-t px-5 py-3">
                  <div className="h-5 w-7 bg-gray-200 rounded" />
                </td>
                <td className="border-t px-10 py-3">
                  <div className="h-5 w-20 bg-gray-200 rounded" />
                </td>
                <td className="border-t px-10 py-3">
                  <div className="h-5 w-14 bg-gray-200 rounded" />
                </td>
                <td className="border-t px-10 py-3">
                  <div className="h-4 w-20 bg-gray-200 rounded" />
                </td>
                <td className="border-t px-10 py-3">
                  <div className="h-4 w-20 bg-gray-200 rounded" />
                </td>
                <td className="border-t px-10 py-3">
                  <div className="h-4 w-16 bg-gray-200 rounded" />
                </td>
                <td className="border-t px-10 py-3">
                  <div className="h-4 w-14 bg-gray-200 rounded" />
                </td>
                <td className="border-t px-10 py-3">
                  <div className="h-4 w-12 bg-gray-200 rounded" />
                </td>
                <td className="border-t px-10 py-3">
                  <div className="h-4 w-16 bg-gray-200 rounded" />
                </td>
                <td className="border-t px-10 py-3">
                  <div className="h-4 w-20 bg-gray-200 rounded" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-4 text-red-500 text-sm">
        Error loading transactions: {error}
      </div>
    );
  }

  if (transactions.length === 0) {
    return (
      <div className="text-center py-4 text-gray-500 text-sm">
        No recent transactions available
      </div>
    );
  }

  return (
    <div className="text-left overflow-x-auto custom-scrollbar-hidden border border-black/10 rounded-lg pl-2 pt-3 mb-3 pr-3">
      <table className="table-auto w-full border-collapse text-md">
        <thead className="">
          <tr className="text-black/60">
            <th className=" px-5 py-2">Country</th>
            <th className=" px-10 py-2">Company</th>
            <th className=" px-10 py-2">Ticker</th>
            <th className=" px-10 py-2">Insider</th>
            <th className=" px-10 py-2">Title</th>
            <th className=" px-10 py-2">Type</th>
            <th className=" px-10 py-2">Price</th>
            <th className=" px-10 py-2">Qty</th>
            <th className=" px-10 py-2">Amount</th>
            <th className=" px-10 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr
              key={transaction.id || index}
              className="text-sm hover:bg-accent/10 transition-colors"
            >
              <td className="border-t px-5 py-2">
                <span className="text-lg" title="Canada">
                  🇨🇦
                </span>
              </td>
              <td
                className="border-t px-10 py-2 max-w-[150px] truncate"
                title={transaction.company_name}
              >
                {transaction.company_name || "N/A"}
              </td>
              <td className="border-t px-10 py-2 font-semibold text-accent">
                {transaction.ticker || "N/A"}
              </td>
              <td
                className="border-t px-10 py-2 max-w-[200px] truncate"
                title={transaction.insider_name}
              >
                {transaction.insider_name || "N/A"}
              </td>
              <td className="border-t px-10 py-2 " title={transaction.title}>
                {transaction.title || "N/A"}
              </td>
              <td className="border-t px-10 py-2">
                {transaction.trade_type || "N/A"}
              </td>
              <td className="border-t px-10 py-2">
                {transaction.price || "$0.00"}
              </td>
              <td className="border-t px-10 py-2 text-green-600 font-medium">
                {transaction.qty || "0"}
              </td>
              <td className="border-t px-10 py-2 text-green-600 font-medium">
                {transaction.value || "$0"}
              </td>
              <td className="border-t px-10 py-2 whitespace-nowrap">
                {formatDate(transaction.transaction_date)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomeInsiderTransactions;

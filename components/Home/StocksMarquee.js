// import { useEffect, useState } from "react";
// import { STOCK_SCREENER } from "@/src/api/lithiumAPI";

// const StocksMarquee = () => {
//   const [symbols, setSymbols] = useState([]);

//   useEffect(() => {
//     const fetchStockData = async () => {
//       try {
//         const response = await fetch(STOCK_SCREENER);
//         const data = await response.json();

//         const formattedSymbols = data.map((stock) => ({
//           description: "",
//           proName: `${stock.exchange.toUpperCase()}:${stock.ticker.toUpperCase()}`,
//         }));

//         setSymbols(formattedSymbols);
//       } catch (error) {
//         console.error("Error fetching stock data:", error);
//       }
//     };

//     fetchStockData();
//   }, []);

//   useEffect(() => {
//     if (symbols.length > 0) {
//       const script = document.createElement("script");
//       script.src =
//         "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
//       script.async = true;
//       script.innerHTML = JSON.stringify({
//         symbols: symbols,
//         showSymbolLogo: true,
//         isTransparent: false,
//         displayMode: "regular",
//         colorTheme: "light",
//         locale: "en",
//       });

//       document.getElementById("tradingview-widget-script").appendChild(script);
//     }
//   }, [symbols]);

//   return (
//     <div className="tradingview-widget-container">
//       <div
//         className="tradingview-widget-container__widget"
//         id="tradingview-widget-script"
//       ></div>
//     </div>
//   );
// };

// export default StocksMarquee;

// import { useEffect, useState } from "react";
// import { STOCK_SCREENER } from "@/src/api/lithiumAPI";

// const StocksMarquee = () => {
//   const [symbols, setSymbols] = useState([]);

//   useEffect(() => {
//     const fetchStockData = async () => {
//       try {
//         const response = await fetch(STOCK_SCREENER);
//         const data = await response.json();

//         const formattedSymbols = data.map((stock) => ({
//           description: "",
//           proName: `${stock.exchange.toUpperCase()}:${stock.ticker
//             .split(".")[0]
//             .toUpperCase()}`, // Extract only the first part before `.`
//         }));

//         setSymbols(formattedSymbols);
//       } catch (error) {
//         console.error("Error fetching stock data:", error);
//       }
//     };

//     fetchStockData();
//   }, []);

//   useEffect(() => {
//     if (symbols.length > 0) {
//       const script = document.createElement("script");
//       script.src =
//         "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
//       script.async = true;
//       script.innerHTML = JSON.stringify({
//         symbols: symbols,
//         showSymbolLogo: true,
//         isTransparent: false,
//         displayMode: "regular",
//         colorTheme: "light",
//         locale: "en",
//       });

//       document.getElementById("tradingview-widget-script").appendChild(script);
//     }
//   }, [symbols]);

//   return (
//     <div className="tradingview-widget-container">
//       <div
//         className="tradingview-widget-container__widget"
//         id="tradingview-widget-script"
//       ></div>
//     </div>
//   );
// };

// export default StocksMarquee;

import { useEffect } from "react";

const StocksMarquee = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { description: "", proName: "COMEX:GC1!" },    // Gold Futures
        { description: "", proName: "COMEX:SI1!" },    // Silver Futures
        { description: "", proName: "NYSE:GLD" },      // SPDR Gold Shares ETF
        { description: "", proName: "NYSE:SLV" },      // iShares Silver Trust ETF
        { description: "", proName: "NYSE:NEM" },      // Newmont - gold mining
        { description: "", proName: "NYSE:GOLD" },     // Barrick Gold
        { description: "", proName: "NYSE:AEM" },      // Agnico Eagle Mines
        { description: "", proName: "NYSE:WPM" },      // Wheaton Precious Metals
        { description: "", proName: "NYSE:FNV" },      // Franco-Nevada
        { description: "", proName: "NYSE:KGC" },      // Kinross Gold
        { description: "", proName: "NYSE:AG" },       // First Majestic Silver
        { description: "", proName: "NYSE:PAAS" },     // Pan American Silver
        { description: "", proName: "TSX:ABX" },       // Barrick Gold (TSX)
      ],
      showSymbolLogo: true,
      isTransparent: false,
      displayMode: "regular",
      colorTheme: "light",
      locale: "en",
    });

    document.getElementById("tradingview-widget").appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div
        className="tradingview-widget-container__widget"
        id="tradingview-widget"
      ></div>
    </div>
  );
};

export default StocksMarquee;

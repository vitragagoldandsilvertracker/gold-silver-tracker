import React, { useEffect, useRef, memo } from "react";

// Gold spot price — symbol-overview widget (area chart with date range tabs)
function GoldSymbolOverview() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear any previous content
    containerRef.current.innerHTML = "";

    // Create widget div structure
    const widgetDiv = document.createElement("div");
    widgetDiv.className = "tradingview-widget-container__widget";
    containerRef.current.appendChild(widgetDiv);

    // Inject the script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [["Gold", "TVC:GOLD|1M"]],
      dateRanges: ["1d|1", "1m|30", "3m|60", "12m|1D", "60m|1W", "all|1M"],
      defaultColumn: 5,
      chartType: "area",
      lineWidth: 2,
      lineType: 0,
      upColor: "#C9A84C",
      downColor: "#f7525f",
      borderUpColor: "#C9A84C",
      borderDownColor: "#f7525f",
      wickUpColor: "#C9A84C",
      wickDownColor: "#f7525f",
      volumeUpColor: "rgba(201,168,76,0.5)",
      volumeDownColor: "rgba(247,82,95,0.5)",
      backgroundColor: "#ffffff",
      colorTheme: "light",
      isTransparent: false,
      locale: "en",
      autosize: true,
      width: "100%",
      height: "100%",
      chartOnly: false,
      scalePosition: "right",
      scaleMode: "Normal",
      fontFamily:
        "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
      fontSize: "10",
      headerFontSize: "medium",
      valuesTracking: "1",
      changeMode: "price-and-percent",
      noTimeScale: false,
      hideDateRanges: false,
      hideMarketStatus: false,
      hideSymbolLogo: false,
    });

    containerRef.current.appendChild(script);
  }, []);

  return (
    <div
      className="tradingview-widget-container"
      ref={containerRef}
      style={{ width: "100%", height: "260px" }}
    />
  );
}

export default memo(GoldSymbolOverview);

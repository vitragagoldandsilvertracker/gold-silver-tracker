import React, { useEffect, useRef, memo } from "react";

// Silver spot price — symbol-overview widget, defaults to "All" tab
function SilverSymbolOverview() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = "";

    const widgetDiv = document.createElement("div");
    widgetDiv.className = "tradingview-widget-container__widget";
    containerRef.current.appendChild(widgetDiv);

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [["Silver", "TVC:SILVER|all"]],
      dateRanges: ["1d|1", "1m|30", "3m|60", "12m|1D", "60m|1W", "all|1M"],
      chartType: "area",
      lineWidth: 2,
      lineType: 0,
      upColor: "#22ab94",
      downColor: "#f7525f",
      borderUpColor: "#22ab94",
      borderDownColor: "#f7525f",
      wickUpColor: "#22ab94",
      wickDownColor: "#f7525f",
      volumeUpColor: "rgba(192,192,192,0.5)",
      volumeDownColor: "rgba(247,82,95,0.5)",
      backgroundColor: "#ffffff",
      colorTheme: "light",
      isTransparent: false,
      locale: "en",
      autosize: false,
      width: "100%",
      height: "300",
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
      style={{ width: "100%", height: "300px" }}
    />
  );
}

export default memo(SilverSymbolOverview);

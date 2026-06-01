import React, { useEffect, useRef, memo } from "react";

function SilverMiniChart() {
  const containerRef = useRef();

  useEffect(() => {
    if (!containerRef.current) return;

    // Inject the module script once (shared with TVLithiumCFD)
    if (!document.getElementById("tv-mini-chart-script")) {
      const script = document.createElement("script");
      script.id = "tv-mini-chart-script";
      script.type = "module";
      script.src =
        "https://widgets.tradingview-widget.com/w/en/tv-mini-chart.js";
      document.head.appendChild(script);
    }

    // Build the web component element
    containerRef.current.innerHTML = "";
    const widget = document.createElement("tv-mini-chart");
    widget.setAttribute("symbol", "COMEX:SI1!");
    widget.setAttribute("width", "100%");
    widget.setAttribute("height", "380");
    widget.setAttribute("locale", "en");
    widget.setAttribute("color-theme", "light");
    widget.setAttribute("trend-line-color", "rgba(192,192,192,1)");
    widget.setAttribute("under-line-color", "rgba(192,192,192,0.15)");
    widget.setAttribute("is-transparent", "false");
    widget.setAttribute("auto-size", "true");
    containerRef.current.appendChild(widget);
  }, []);

  return (
    <div ref={containerRef} style={{ width: "100%", minHeight: "380px" }} />
  );
}

export default memo(SilverMiniChart);

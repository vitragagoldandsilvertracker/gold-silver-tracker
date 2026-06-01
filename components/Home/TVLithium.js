import React, { useEffect, useRef, memo } from "react";

const SCRIPT_ID = "tv-mini-chart-module";
const SCRIPT_SRC = "https://widgets.tradingview-widget.com/w/en/tv-mini-chart.js";

function SilverMiniChart() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!document.getElementById(SCRIPT_ID)) {
      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.type = "module";
      script.src = SCRIPT_SRC;
      document.head.appendChild(script);
    }

    if (containerRef.current) {
      containerRef.current.innerHTML = `
        <tv-mini-chart
          symbol="TVC:SILVER"
          width="100%"
          height="380"
          locale="en"
          color-theme="light"
          trend-line-color="rgba(192,192,192,1)"
          under-line-color="rgba(192,192,192,0.15)"
          is-transparent="false"
          auto-size="true"
        ></tv-mini-chart>
      `;
    }
  }, []);

  return <div ref={containerRef} style={{ width: "100%", minHeight: "380px" }} />;
}

export default memo(SilverMiniChart);

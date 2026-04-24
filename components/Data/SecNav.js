import React, { useState } from "react";
import * as style from "./styles.js";

const SecNav = () => {
  const [activeTab, setActiveTab] = useState("Prices & Charts");
  const [hoveredTab, setHoveredTab] = useState(null);

  const tabs = [
    { name: "Prices & Charts", href: "prices" },
    { name: "Macro Drivers", href: "macro" },
    { name: "Physical Market", href: "physical" },
    { name: "COT Positioning", href: "cot" },
    { name: "Gold Demand", href: "demand" },
    { name: "Silver Market", href: "silver" },
    { name: "ETFs & Funds", href: "etfs" },
    { name: "Mining Stocks", href: "miners" },
    { name: "Sentiment", href: "sentiment" },
  ];

  return (
    <nav style={style.snav}>
      <div style={style.snavI}>
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onMouseEnter={() => setHoveredTab(tab.name)}
            onMouseLeave={() => setHoveredTab(null)}
            onClick={() => {
              setActiveTab(tab.name);
              document
                .getElementById(tab.href)
                .scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              ...style.sn,
              ...(hoveredTab === tab.name ? style.snHover : {}),
              ...(activeTab === tab.name ? style.snOn : {}),
            }}
          >
            {tab.name}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default SecNav;

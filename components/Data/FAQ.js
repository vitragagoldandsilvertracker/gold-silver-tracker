import React, { useState } from "react";
import * as style from "./styles.js";

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  // Internal styles for FAQ functionality
  const faqContainerStyle = {
    border: `1px solid ${style.tokens.bdr}`,
    borderRadius: "var(--rl)",
    overflow: "hidden",
    backgroundColor: "#fff",
  };

  const faqItemStyle = (isLast) => ({
    borderBottom: isLast ? "none" : `1px solid ${style.tokens.bdr}`,
  });

  const faqBtnStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px 24px",
    background: "none",
    border: "none",
    cursor: "pointer",
    textAlign: "left",
    outline: "none",
  };

  const faqTitleStyle = {
    fontSize: "15px",
    fontWeight: "600",
    color: style.tokens.ink,
    margin: 0,
  };

  const faqBodyStyle = (isOpen) => ({
    padding: isOpen ? "0 24px 20px 24px" : "0 24px",
    maxHeight: isOpen ? "1000px" : "0",
    overflow: "hidden",
    transition: "all 0.3s ease-in-out",
    opacity: isOpen ? 1 : 0,
  });

  const faqTextStyle = {
    fontSize: "14px",
    lineHeight: "1.6",
    color: style.tokens.ink2,
    margin: 0,
  };

  const arrowStyle = (isOpen) => ({
    fontSize: "10px",
    color: style.tokens.muted,
    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
    transition: "transform 0.2s ease",
  });

  const faqs = [
    {
      q: "What is the gold price today per ounce?",
      a: "The gold spot price today is $4,728 per troy ounce (April 13, 2026, 9:05 AM ET). Gold hit an all-time high of $5,602 on January 28, 2026, driven by geopolitical risk and central bank buying. It has since pulled back approximately 15% on a US-Iran ceasefire and dollar strengthening. The price updates every 60 seconds on this page from GoldAPI.io. Gold has gained approximately 46.9% year-over-year from April 2025.",
    },
    {
      q: "What is the gold price per gram today?",
      a: "At today's spot price of $4,728 per troy ounce, the gold price per gram is $152.05 for 24K (pure) gold. To convert: divide the spot price by 31.1035 (grams per troy ounce). For common karats: 22K gold = $139.43/gram • 18K gold = $114.04/gram • 14K gold = $88.64/gram • 10K gold = $63.41/gram. Use the calculator above to find the value of any weight and purity.",
    },
    {
      q: "What is the silver price today?",
      a: "The silver spot price today is $73.00 per troy ounce (April 13, 2026). Silver hit an all-time high of approximately $121/oz in January 2026, driven by a physical squeeze in the London market, China's classification of silver as a strategic material, and surging industrial demand from solar panels. Silver is up approximately 133.9% over the past 12 months. The price per gram is $2.35 for .999 fine silver.",
    },
    {
      q: "What is the gold/silver ratio right now and what does it mean?",
      a: "The gold/silver ratio is currently 64.8x (April 13, 2026), meaning it takes approximately 64.8 ounces of silver to buy one ounce of gold. This is near the long-run historical average of 67x. The ratio peaked at 125x during the COVID crisis in March 2020, and compressed sharply as silver surged in 2025–2026. When the ratio is high, silver is considered cheap relative to gold.",
    },
    {
      q: "What is the difference between GLD and IAU gold ETFs?",
      a: "Both GLD and IAU are physically-backed gold ETFs. The key differences are: GLD has a 0.40% annual expense ratio vs IAU at 0.25%. GLD is larger (~$87bn AUM) with higher liquidity, making it the preferred choice for institutions. IAU suits long-term retail investors due to the lower carry cost. PHYS (Sprott) is an alternative that holds fully allocated bars with redemption rights.",
    },
    {
      q: "What is COMEX registered gold inventory and why does it matter?",
      a: "COMEX registered gold is physical gold stored in CME-approved US warehouses that can be immediately delivered against a futures contract. Currently: ~33.2 million oz (1,034 tonnes). Registered inventory matters because it sets the ceiling on physical delivery demand. When registered stocks fall sharply, physical delivery pressure increases, potentially leading to a price squeeze.",
    },
    {
      q: "Why is the silver market in a structural supply deficit?",
      a: "Silver has been in a supply deficit for five consecutive years since 2021. The primary driver is surging industrial demand from solar PV manufacturing (29% of industrial demand), electric vehicles, and AI-related electronics. Total industrial demand hit a record 680.5 million ounces in 2024. Supply is inelastic because ~72% of silver is produced as a by-product of other mining operations.",
    },
    {
      q: "What is the CFTC COT report and how does it relate to gold trading?",
      a: "The CFTC Commitment of Traders (COT) report is a weekly snapshot of futures market positioning. For gold, the key figure is 'managed money net longs'—the position of hedge funds. When this is at multi-year highs, the trade is crowded and vulnerable to reversal. At extreme lows, it often signals a bottom. Free public data is released every Friday at 3:30pm ET.",
    },
  ];

  return (
    <section
      style={style.sec}
      id="faq"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div style={style.w}>
        <p style={style.slbl}>
          Frequently asked questions · Schema-optimised for Google rich results
        </p>
        <h2 style={style.stitle}>
          Gold & Silver FAQ — Prices, Data & Investing
        </h2>
        <p style={style.sdesc}>
          Common questions about gold and silver prices, data sources and
          investing. Answers drawn from live market data.
        </p>

        <div style={faqContainerStyle}>
          {faqs.map((faq, index) => {
            const isOpen = openId === index;
            const isLast = index === faqs.length - 1;

            return (
              <div
                key={index}
                style={faqItemStyle(isLast)}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <button
                  style={faqBtnStyle}
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                >
                  <span style={faqTitleStyle} itemProp="name">
                    {faq.q}
                  </span>
                  <span style={arrowStyle(isOpen)}>▼</span>
                </button>
                <div
                  style={faqBodyStyle(isOpen)}
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <p style={faqTextStyle} itemProp="text">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

import React, { useState } from "react";
import * as style from "./styles.js";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqTog = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      q: "What is the gold price today?",
      a: "As of April 13, 2026, the gold spot price is $4,728 per troy ounce. Gold hit an all-time high of $5,602 on January 28, 2026, driven by geopolitical risk from the US-Iran Strait of Hormuz conflict and record central bank buying. It has since pulled back about 15% as a fragile ceasefire reduced safe-haven demand. Year-over-year, gold is up approximately 47%. See the live gold price on our <a href='/data/'>Data page</a>.",
    },
    {
      q: "What is the gold price per gram today?",
      a: "At $4,728 per troy ounce, pure 24K gold is $152.05 per gram. The formula: spot price &divide; 31.1035 &times; purity. For 18K gold (75% pure): $114.04/gram. For 14K (58.3% pure): $88.64/gram. For 10K (41.7% pure): $63.41/gram. These are melt values &mdash; what the raw gold content is worth. Dealer resale prices for jewelry will be lower.",
    },
    {
      q: "GLD vs IAU: which gold ETF should I buy?",
      a: "For most long-term retail investors, IAU (iShares Gold Trust, 0.25% annual fee) is the better choice over GLD (SPDR Gold Shares, 0.40%). Both hold physical gold in allocated vaults and track spot price closely. GLD has higher liquidity and is preferred by institutions for large trades. For buy-and-hold investors, IAU&rsquo;s 0.15% fee advantage compounds significantly over time. PHYS (Sprott Physical Gold Trust, 0.35%) is worth considering if you want the option of redeeming shares for physical gold bars.",
    },
    {
      q: "Is a gold IRA a good idea?",
      a: "It depends on your situation. A gold IRA makes sense if you want tax-advantaged exposure to physical gold and are comfortable with its higher costs: combined custodian and storage fees of $225&ndash;$800+ per year, plus dealer premiums of 3&ndash;8% when buying. For most investors who just want gold price exposure, a low-cost ETF like IAU at 0.25% annually is simpler and cheaper. A gold IRA earns its keep primarily for investors rolling over a substantial 401(k) balance who want tangible metal inside a tax shelter, or those with strong convictions about holding allocated physical gold in retirement.",
    },
    {
      q: "What is the gold/silver ratio and what does it mean?",
      a: "The gold/silver ratio (currently 64.8x) is the gold price divided by the silver price. It tells you how many ounces of silver it takes to buy one ounce of gold. The long-run historical average is roughly 67x. When it spiked to 125x in March 2020, silver was extremely cheap relative to gold &mdash; a signal many investors used to switch from gold to silver. At 64.8x today, the ratio is near its long-run average, offering no strong relative-value signal in either direction. See the live ratio chart on our <a href='/data/'>Data page</a>.",
    },
    {
      q: "What drives the gold price higher or lower?",
      a: "Four main factors: (1) US real interest rates &mdash; falling TIPS yields make gold more attractive because its opportunity cost drops; (2) the US dollar &mdash; a weaker DXY means gold buys more dollars; (3) central bank buying &mdash; emerging market central banks purchased over 1,000 tonnes per year in 2022, 2023, and 2024, creating structural demand; (4) geopolitical and financial uncertainty driving safe-haven demand. The traditional relationship between gold and real yields broke down somewhat after 2022 because structural central bank demand overwhelmed rate-driven selling.",
    },
    {
      q: "Why is the silver market in a supply deficit?",
      a: "Silver has run a supply deficit for five consecutive years since 2021. The cumulative shortfall through 2025 is ~862 million ounces. The primary driver is surging industrial demand, particularly from solar photovoltaic manufacturing (197 million oz consumed in 2024, up from ~50 million in 2013). The supply side can&rsquo;t easily respond because ~72% of silver comes as a byproduct of copper, lead, and zinc mining &mdash; output is determined by base metal economics, not silver prices. Total silver industrial demand hit a record 680.5 million oz in 2024 &mdash; the fourth consecutive annual record.",
    },
    {
      q: "How much gold should I own in my portfolio?",
      a: "Most financial advisors suggest 5&ndash;10% of a portfolio. World Gold Council research shows even a 2&ndash;10% allocation has historically improved risk-adjusted returns due to gold&rsquo;s low correlation to stocks and bonds (roughly 0.1&ndash;0.3 to the S&amp;P 500 over long periods). The right amount depends on your conviction about monetary debasement, time horizon, and the rest of your portfolio. There&rsquo;s no universal correct answer. As a starting point: if you have no precious metals exposure at all, 5% gives meaningful diversification without overweighting a non-yielding asset.",
    },
    {
      q: "What is a troy ounce?",
      a: "A troy ounce is 31.1035 grams &mdash; roughly 10% heavier than a regular avoirdupois ounce (28.35 grams). All precious metals are priced in troy ounces. When the gold price is quoted at $4,728 &ldquo;per ounce,&rdquo; that always means a troy ounce. The troy system originated in medieval Troyes, France, and has been the standard for precious metals for centuries.",
    },
    {
      q: "What is the difference between spot price and dealer price?",
      a: "The spot price is the wholesale benchmark &mdash; the theoretical price for one troy ounce of gold for immediate delivery in the institutional market. When you buy physical gold from a dealer, you pay spot price plus a premium that covers minting, handling, distribution, and the dealer&rsquo;s margin. This premium typically runs 3&ndash;8% for sovereign coins (Gold Eagles, Maple Leafs) and 1&ndash;4% for large bars. When selling, dealers pay slightly below spot (1&ndash;3% below). The spread between buy and sell prices is the total round-trip cost of owning physical gold.",
    },
    {
      q: "What is COMEX and why does it matter?",
      a: "COMEX (Commodity Exchange, a division of CME Group) is the primary US futures exchange for gold and silver. COMEX futures prices, combined with London OTC trading, effectively set the global spot price. COMEX also maintains approved warehouses where physical gold and silver is stored to back futures contracts. The daily warehouse inventory reports (free downloads from CME Group) are closely watched: specifically the &ldquo;registered&rdquo; inventory &mdash; metal immediately available for futures delivery. Falling registered stocks signal tightening physical conditions. In early 2026, COMEX gold registered inventory quadrupled as metal flowed from London ahead of potential tariffs.",
    },
  ];

  return (
    <section className="sec prose" id="faq" style={style.sec}>
      <p className="sec-label" style={style.secLabel}>
        Frequently asked questions
      </p>
      <h2 style={style.secH2}>Gold &amp; Silver FAQ</h2>

      <div itemScope itemType="https://schema.org/FAQPage">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="faq-item"
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
            style={{
              borderBottom: "1px solid var(--ink-t)",
              marginBottom: "8px",
            }}
          >
            <button
              className="faq-btn"
              onClick={() => faqTog(index)}
              aria-expanded={openIndex === index}
              style={{
                width: "100%",
                textAlign: "left",
                padding: "16px 0",
                background: "none",
                border: "none",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
                fontFamily: "inherit",
                fontSize: "16px",
                fontWeight: "500",
                color: "var(--ink)",
              }}
            >
              <span itemProp="name">{item.q}</span>
              <span
                className="faq-arr"
                style={{
                  transform:
                    openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s ease",
                }}
              >
                &#x25BC;
              </span>
            </button>
            <div
              className="faq-body"
              itemScope
              itemProp="acceptedAnswer"
              itemType="https://schema.org/Answer"
              style={{
                display: openIndex === index ? "block" : "none",
                paddingBottom: "16px",
                color: "var(--ink3)",
                fontSize: "15px",
                lineHeight: "1.6",
              }}
            >
              <p itemProp="text" dangerouslySetInnerHTML={{ __html: item.a }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;

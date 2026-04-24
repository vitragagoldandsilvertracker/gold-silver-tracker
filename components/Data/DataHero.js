import React from "react";
import * as style from "./styles.js";

const DataHero = () => {
  return (
    <section style={style.hero}>
      <div style={style.heroBefore} />
      <div style={{ ...style.w, ...style.heroInner }}>
        <p style={style.hEye}>Live market data — 42 sources, all automated</p>
        <h1 style={style.hTitle}>
          Live Gold & Silver <em style={style.hTitleEm}>Prices</em>, Charts &
          Data
        </h1>
        <p style={style.hSub}>
          Prices, macro drivers, COMEX & LBMA inventory, COT positioning, ETF
          flows and mining analytics. US-focused. Updated daily. $0/month to
          run. Use our{" "}
          <a
            href="/investments?tab=stock-screener"
            style={{
              ...style.aBase,
              color: style.tokens.goldL,
              textDecoration: "underline",
            }}
          >
            gold mining stock screener
          </a>{" "}
          or read the{" "}
          <a
            href="/gold-silver-101"
            style={{
              ...style.aBase,
              color: style.tokens.goldL,
              textDecoration: "underline",
            }}
          >
            Gold & Silver 101 guide
          </a>
          .
        </p>
        <div style={style.hUpd}>
          <span style={style.ldot}></span>
          April 13, 2026 · 9:05 AM ET · Sources: GoldAPI, FRED, CME, CFTC, WGC,
          LBMA, Silver Institute
        </div>
        {/* <div className="grid grid-cols" style={style.hpg}> */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div style={style.hpc}>
            <p style={style.hpcL}>Gold — XAU/USD</p>
            <p style={{ ...style.hpcV, color: style.tokens.goldL }}>
              $4,728.00
            </p>
            <p style={{ ...style.hpcC, ...style.dn }}>▼ −$20.90 (−0.44%)</p>
            <p style={style.hpcS}>ATH $5,602 · Jan 28, 2026</p>
          </div>
          <div style={style.hpc}>
            <p style={style.hpcL}>Silver — XAG/USD</p>
            <p style={{ ...style.hpcV, color: style.tokens.silL }}>$73.00</p>
            <p style={{ ...style.hpcC, ...style.up }}>▲ +$0.15 (+0.21%)</p>
            <p style={style.hpcS}>ATH $121 · Jan 2026</p>
          </div>
          <div style={style.hpc}>
            <p style={style.hpcL}>Gold / Silver Ratio</p>
            <p style={style.hpcV}>64.8×</p>
            <p style={{ ...style.hpcC, ...style.neu }}>Long-run avg: 67×</p>
            <p style={style.hpcS}>Near historical average</p>
          </div>
          <div style={style.hpc}>
            <p style={style.hpcL}>10yr Real Yield (TIPS)</p>
            <p style={{ ...style.hpcV, color: "rgba(255,255,255,.85)" }}>
              1.89%
            </p>
            <p style={{ ...style.hpcC, ...style.neu }}>FRED: DFII10</p>
            <p style={style.hpcS}>Primary gold price driver</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataHero;

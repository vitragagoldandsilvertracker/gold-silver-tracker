import React from "react";
import * as style from "./styles.js";

const SentimentSection = () => {
  const sectionStyle = {
    ...style.sec,
    ...style.secAlt,
  };

  const cardStyle = {
    ...style.cb,
    backgroundColor: "#fff",
    border: "1px solid rgba(0,0,0,0.08)",
  };

  return (
    <section style={sectionStyle} id="sentiment">
      <div style={style.w}>
        <p style={style.slbl}>
          Section I · TradingView embeds · Zero backend · Real-time
        </p>
        <h2 style={style.stitle}>Sentiment & Cross-Asset</h2>
        <p style={style.sdesc}>
          VIX fear gauge vs gold and a multi-asset performance comparison. Both
          TradingView embeds — zero backend, zero cost, real-time.
        </p>

        <div
          className="grid grid-cols-1 xl:grid-cols-2 gap-4"
          style={{ ...style.gap }}
        >
          <div style={cardStyle}>
            <div style={style.ch}>
              <div>
                <p style={style.cl}>TradingView · CBOE:VIX + OANDA:XAUUSD</p>
                <p style={style.ct2}>VIX Fear Gauge vs Gold</p>
                <p style={style.cm}>
                  Gold safe-haven demand rises with equity market fear
                </p>
              </div>
            </div>

            <div style={{ ...style.tvph, height: "210px" }}>
              <div style={style.tvic}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M2 12L5 10L8 13L11 5L14 8L16 6"
                    stroke="#C9A84C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span style={style.tvsym}>CBOE:VIX + OANDA:XAUUSD</span>
              <span style={{ fontSize: "11px", color: "var(--muted)" }}>
                TradingView multi-symbol overlay
              </span>
              <span style={style.tvcr}>
                embed-widget-symbol-overview.js · zero backend
              </span>
            </div>
            <p style={style.csrc}>
              Source: TradingView — Real-time safe-haven correlation
            </p>
          </div>

          <div style={cardStyle}>
            <div style={style.ch}>
              <div>
                <p style={style.cl}>TradingView · Multi-asset comparison</p>
                <p style={style.ct2}>Gold vs S&P 500 vs 20yr Bonds vs Silver</p>
                <p style={style.cm}>
                  Performance comparison — gold as portfolio diversifier
                </p>
              </div>
            </div>

            <div style={{ ...style.tvph, height: "210px" }}>
              <div style={style.tvic}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M2 13L6 7L9 9.5L12 4L16 7.5"
                    stroke="#C9A84C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span style={style.tvsym}>XAUUSD · SPY · TLT · XAGUSD</span>
              <span style={{ fontSize: "11px", color: "var(--muted)" }}>
                TradingView multi-symbol comparison
              </span>
              <span style={style.tvcr}>
                embed-widget-symbol-overview.js · zero backend
              </span>
            </div>
            <p style={style.csrc}>
              Source: TradingView — Relative performance benchmark
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SentimentSection;

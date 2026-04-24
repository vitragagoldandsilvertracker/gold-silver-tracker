import React from "react";
import * as style from "./styles.js";

const ETFS = () => {
  const sectionStyle = {
    ...style.sec,
    ...style.secAlt,
  };

  const etfCardStyle = {
    ...style.cb,
    backgroundColor: "#fff",
    border: "1px solid rgba(0,0,0,0.06)",
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const etfData = [
    {
      ticker: "GLD",
      name: "SPDR Gold Shares",
      price: "$433.10",
      change: "-0.41%",
      isUp: false,
      type: "Physical Gold",
      typeBg: "rgba(201,168,76,.1)",
      typeColor: "var(--gold-d)",
      symbol: "AMEX:GLD",
      aum: "$87.4bn",
      extra: "845t gold",
      fee: "0.40%",
    },
    {
      ticker: "IAU",
      name: "iShares Gold Trust",
      price: "$86.62",
      change: "-0.40%",
      isUp: false,
      type: "Physical Gold",
      typeBg: "rgba(201,168,76,.1)",
      typeColor: "var(--gold-d)",
      symbol: "AMEX:IAU",
      aum: "$39.2bn",
      extra: "380t gold",
      fee: "0.25%",
    },
    {
      ticker: "PHYS",
      name: "Sprott Physical Gold",
      price: "$32.88",
      change: "-0.36%",
      isUp: false,
      type: "Allocated",
      typeBg: "rgba(26,122,74,.1)",
      typeColor: "var(--grn)",
      symbol: "TSX:PHYS",
      aum: "$7.8bn",
      extra: "Fully alloc.",
      fee: "0.35%",
    },
    {
      ticker: "SLV",
      name: "iShares Silver Trust",
      price: "$68.92",
      change: "+0.18%",
      isUp: true,
      type: "Physical Silver",
      typeBg: "rgba(168,168,179,.15)",
      typeColor: "#5C5C6B",
      symbol: "AMEX:SLV",
      aum: "$14.1bn",
      extra: "14,200t Ag",
      fee: "0.50%",
    },
    {
      ticker: "GDX",
      name: "VanEck Gold Miners",
      price: "$61.44",
      change: "+0.62%",
      isUp: true,
      type: "Mining Equity",
      typeBg: "rgba(30,58,95,.1)",
      typeColor: "var(--blu)",
      symbol: "AMEX:GDX",
      aum: "$16.8bn",
      extra: "~2x gold beta",
      fee: "0.51%",
    },
    {
      ticker: "WPM",
      name: "Wheaton Precious Metals",
      price: "$89.12",
      change: "-0.15%",
      isUp: false,
      type: "Streaming",
      typeBg: "rgba(26,26,46,.06)",
      typeColor: "var(--ink3)",
      symbol: "NYSE:WPM",
      aum: "$40.2bn (Mkt Cap)",
      extra: "Streaming",
      fee: "NYSE:WPM",
    },
  ];

  return (
    <section style={sectionStyle} id="etfs">
      <div style={style.w}>
        <p style={style.slbl}>
          Section G · TradingView mini charts · Zero backend · AUM data updated
          quarterly
        </p>
        <h2 style={style.stitle}>
          Gold & Silver ETF Comparison — GLD, IAU, SLV, GDX & More
        </h2>
        <p style={style.sdesc}>
          The major gold and silver ETFs and royalty companies. Mini charts via
          TradingView — zero backend, zero API key. Total global gold ETF AUM:
          $606bn (Q1 2026).
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {etfData.map((etf) => (
            <div key={etf.ticker} style={etfCardStyle}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <div>
                  <p
                    style={{
                      ...style.ct,
                      margin: 0,
                      fontSize: "18px",
                      fontWeight: "700",
                    }}
                  >
                    {etf.ticker}
                  </p>
                  <p style={{ ...style.cl, margin: 0 }}>{etf.name}</p>
                </div>
                <span
                  style={{
                    fontSize: "10px",
                    fontWeight: "600",
                    padding: "3px 7px",
                    borderRadius: "4px",
                    background: etf.typeBg,
                    color: etf.typeColor,
                  }}
                >
                  {etf.type}
                </span>
              </div>

              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "500",
                  marginTop: "10px",
                  fontFamily: '"DM Mono", monospace',
                }}
              >
                {etf.price}
                <span style={etf.isUp ? style.up : style.dn}>
                  {" "}
                  {etf.change}
                </span>
              </p>

              {/* TradingView Placeholder */}
              <div
                style={{
                  ...style.cb,
                  background: "#f8f9fa",
                  height: "80px",
                  margin: "8px 0",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px dashed #ddd",
                }}
              >
                <span style={{ fontSize: "10px", color: "#999" }}>
                  {etf.symbol}
                </span>
                <span style={{ fontSize: "9px", color: "#ccc" }}>
                  TradingView Mini Widget
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "11px",
                  color: "var(--ink3)",
                  marginTop: "8px",
                  borderTop: "1px solid #f0f0f0",
                  paddingTop: "8px",
                }}
              >
                <span>
                  AUM <b>{etf.aum}</b>
                </span>
                <span>{etf.extra}</span>
                <span>
                  {etf.ticker === "WPM" ? "Ticker" : "Fee"} <b>{etf.fee}</b>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ETFS;

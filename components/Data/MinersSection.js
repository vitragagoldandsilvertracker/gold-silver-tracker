import React from "react";
import * as style from "./styles.js";
import AiscChart from "./Charts/aiscChart.js";

const MinersSection = () => {
  const sectionStyle = {
    ...style.sec,
  };

  // Common card style
  const cardStyle = {
    ...style.cb,
    backgroundColor: "#fff",
    border: "1px solid rgba(0,0,0,0.08)",
  };

  return (
    <section style={sectionStyle} id="miners">
      <div style={style.w}>
        <p style={style.slbl}>
          Section H · NEW — Alpha Vantage free API + WGC AISC + TradingView ·
          All automated
        </p>
        <h2 style={style.stitle}>
          Major Gold Mining Stocks — NEM, AEM, KGC, WPM & GDX Performance
        </h2>
        <p style={style.sdesc}>
          Stock prices from Alpha Vantage (free 25 req/day) or Yahoo Finance.
          AISC vs spot shows record profitability. GDX/gold ratio chart shows
          miners are historically cheap vs spot — a signal stock-focused users
          will value.
        </p>

        <div
          className="grid grid-cols-1 xl:grid-cols-2 gap-4"
          style={{ ...style.gap }}
        >
          <div style={cardStyle}>
            <div style={style.ch}>
              <div>
                <p style={style.cl}>
                  TradingView · GDX/XAUUSD ratio · NEW · Zero backend
                </p>
                <p style={style.ct2}>Gold Miners Discount (GDX / Gold Ratio)</p>
                <p style={style.cm}>
                  When ratio falls, miners are cheap vs spot. Currently near
                  historical lows.
                </p>
              </div>
              <span style={{ ...style.bdg, ...style.bWarn, flexShrink: 0 }}>
                Miners cheap vs spot
              </span>
            </div>

            <div style={{ ...style.tvph, height: "200px" }}>
              <div style={style.tvic}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M2 14L5 8L8 11L11 6L14 9L16 7"
                    stroke="#C9A84C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span style={style.tvsym}>AMEX:GDX / OANDA:XAUUSD</span>
              <span style={{ fontSize: "11px", color: "var(--muted)" }}>
                TradingView — custom ratio chart
              </span>
              <span style={style.tvcr}>symbol-overview.js · zero backend</span>
            </div>
            <p style={style.csrc}>
              Source: TradingView — Relative value of miners vs physical gold
            </p>
          </div>

          <div style={cardStyle}>
            <div style={style.ch}>
              <div>
                <p style={style.cl}>
                  WGC Goldhub · aisc-gold dataset · Quarterly · NEW
                </p>
                <p style={style.ct2}>Gold Spot vs AISC Mining Cost</p>
                <p style={style.cm}>
                  All-in sustaining cost per oz vs spot price · Record profit
                  margins in 2025–26
                </p>
              </div>
            </div>
            <AiscChart />
            <p style={style.csrc}>
              Source: WGC Goldhub · AISC dataset · Mining industry profitability
              trend
            </p>
          </div>
        </div>

        {/* Major Producers Table */}
        <div style={{ ...cardStyle, marginTop: "20px" }}>
          <div style={style.ch}>
            <div>
              <p style={style.cl}>
                Alpha Vantage free API (25 req/day) + company filings · Daily ·
                NEW
              </p>
              <p style={style.ct}>Major Producers & Royalty Companies</p>
              <p style={style.cm}>
                Price, market cap, YTD performance, AISC · Updated daily from
                Alpha Vantage live prices
              </p>
            </div>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table style={style.dt}>
              <thead>
                <tr>
                  <th style={style.dtTh}>Ticker</th>
                  <th style={style.dtTh}>Company</th>
                  <th style={style.dtTh}>Type</th>
                  <th style={style.dtTh}>Price</th>
                  <th style={style.dtTh}>Mkt Cap</th>
                  <th style={style.dtTh}>YTD %</th>
                  <th style={style.dtTh}>AISC/oz</th>
                  <th style={style.dtTh}>Margin/oz</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    ticker: "NEM",
                    name: "Newmont Corp.",
                    type: "Producer",
                    typeClass: style.bGold,
                    price: "$62.44",
                    cap: "$55.2bn",
                    ytd: "+38.4%",
                    aisc: "$1,566",
                    margin: "+$3,162",
                  },
                  {
                    ticker: "AEM",
                    name: "Agnico Eagle Mines",
                    type: "Producer",
                    typeClass: style.bGold,
                    price: "$119.82",
                    cap: "$58.1bn",
                    ytd: "+44.2%",
                    aisc: "$1,228",
                    margin: "+$3,500",
                  },
                  {
                    ticker: "KGC",
                    name: "Kinross Gold",
                    type: "Producer",
                    typeClass: style.bGold,
                    price: "$14.28",
                    cap: "$18.2bn",
                    ytd: "+62.3%",
                    aisc: "$1,344",
                    margin: "+$3,384",
                  },
                  {
                    ticker: "GFI",
                    name: "Gold Fields",
                    type: "Producer",
                    typeClass: style.bGold,
                    price: "$24.18",
                    cap: "$20.4bn",
                    ytd: "+39.8%",
                    aisc: "$1,480",
                    margin: "+$3,248",
                  },
                  {
                    ticker: "WPM",
                    name: "Wheaton Precious Metals",
                    type: "Streaming",
                    typeClass: style.bNeu,
                    price: "$89.12",
                    cap: "$40.2bn",
                    ytd: "+48.6%",
                    aisc: "~$460*",
                    margin: "+$4,268",
                  },
                  {
                    ticker: "RGLD",
                    name: "Royal Gold",
                    type: "Royalty",
                    typeClass: style.bNeu,
                    price: "$224.50",
                    cap: "$14.8bn",
                    ytd: "+41.2%",
                    aisc: "~$500*",
                    margin: "+$4,228",
                  },
                ].map((row) => (
                  <tr key={row.ticker}>
                    <td style={{ ...style.dtTd, ...style.mono }}>
                      <strong>{row.ticker}</strong>
                    </td>
                    <td style={style.dtTd}>{row.name}</td>
                    <td style={style.dtTd}>
                      <span style={{ ...style.bdg, ...row.typeClass }}>
                        {row.type}
                      </span>
                    </td>
                    <td style={{ ...style.dtTd, ...style.mono }}>
                      {row.price}
                    </td>
                    <td style={{ ...style.dtTd, ...style.mono }}>{row.cap}</td>
                    <td style={{ ...style.dtTd, ...style.mono, ...style.up }}>
                      {row.ytd}
                    </td>
                    <td style={{ ...style.dtTd, ...style.mono }}>{row.aisc}</td>
                    <td style={{ ...style.dtTd, ...style.mono, ...style.up }}>
                      <strong>{row.margin}</strong>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ ...style.csrc, marginTop: "8px" }}>
            *Streaming/royalty effective cash costs shown. Prices: Alpha Vantage
            · AISC: WGC Goldhub + company filings.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MinersSection;

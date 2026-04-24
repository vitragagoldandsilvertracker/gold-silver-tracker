import React from "react";
import * as style from "./styles.js";
import RealYieldChart from "./Charts/realYieldChart.js";
import DxyChart from "./Charts/dxyChart.js";
import InflationChart from "./Charts/inflationChart.js";
import DebtChart from "./Charts/debtChart.js";
import AssetReturnChart from "./Charts/assetReturnChart.js";

const MacroSection = () => {
  const cbdStyle = {
    ...style.cb,
    background: "rgba(255,255,255,0.03)",
    borderColor: "rgba(255,255,255,0.1)",
    color: "#fff",
  };

  const tableHeaderStyle = {
    ...style.dtTh,
    color: "rgba(255,255,255,0.4)",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    padding: "10px 8px",
  };

  const tableCellStyle = {
    ...style.dtTd,
    borderBottom: "1px solid rgba(255,255,255,0.06)",
    padding: "10px 8px",
  };

  return (
    <section style={{ ...style.sec, ...style.secDark }} id="macro">
      <div style={style.w}>
        <p style={style.slbl}>
          Section B · FRED API — all series free, same key, daily cron, 120
          req/min
        </p>
        <h2 style={style.stitle2}>
          What Drives the Gold Price? Key Macro Indicators
        </h2>
        <p style={style.sdesc}>
          Five FRED API series that explain the gold price. Completely free, no
          practical rate limits. All fetched in a single daily cron at 6am UTC.
          Store in Postgres, serve from DB. Register at fred.stlouisfed.org —
          takes 2 minutes, free forever.
        </p>

        <div style={{ ...style.ss, ...style.ssd }}>
          <div style={{ ...style.sc, ...style.scd }}>
            <p style={style.sl}>Real Yield (DFII10)</p>
            <p style={style.sv2}>1.89%</p>
            <p style={style.ss2}>Headwind at current level</p>
          </div>
          <div style={{ ...style.sc, ...style.scd }}>
            <p style={style.sl}>US Dollar (DXY)</p>
            <p style={style.sv2}>99.84</p>
            <p style={{ ...style.ss2, ...style.dn }}>Weakening — tailwind</p>
          </div>
          <div style={{ ...style.sc, ...style.scd }}>
            <p style={style.sl}>CPI YoY (CPIAUCSL)</p>
            <p style={style.sv2}>3.3%</p>
            <p style={style.ss2}>Mar 2026 — elevated</p>
          </div>
          <div style={{ ...style.sc, ...style.scd }}>
            <p style={style.sl}>Breakeven (T10YIE)</p>
            <p style={style.sv2}>2.42%</p>
            <p style={style.ss2}>Inflation expectations</p>
          </div>
        </div>

        <div
          className="grid grid-cols-1 xl:grid-cols-2 gap-4"
          style={{ ...style.gap }}
        >
          <div style={cbdStyle}>
            <div style={style.ch}>
              <div>
                <p style={style.cl}>FRED DFII10 + GoldAPI.io · Daily · Free</p>
                <p style={style.ct}>Gold vs Real Yields</p>
                <p style={style.cm}>
                  Strongest single macro driver — inverse relationship
                </p>
              </div>
              <span style={{ ...style.bWarn, flexShrink: 0 }}>
                Headwind 1.89%
              </span>
            </div>
            <RealYieldChart />
            <p style={style.csrc}>
              Source: FRED DFII10 (10yr TIPS real yield) + GoldAPI.io · Daily
              cron 6am UTC · Free
            </p>
          </div>
          <div style={cbdStyle}>
            <div style={style.ch}>
              <div>
                <p style={style.cl}>
                  FRED DTWEXBGS + GoldAPI.io · Daily · Free
                </p>
                <p style={style.ct}>Gold vs US Dollar Index</p>
                <p style={style.cm}>
                  Consistent negative correlation over decades
                </p>
              </div>
              <span style={{ ...style.bBull, flexShrink: 0 }}>
                DXY weakening
              </span>
            </div>
            <DxyChart />
            <p style={style.csrc}>
              Source: FRED DTWEXBGS (broad trade-weighted dollar) + GoldAPI.io ·
              Daily · Free
            </p>
          </div>
        </div>

        <div
          className="grid grid-cols-1 xl:grid-cols-2 gap-4"
          style={{ ...style.gap }}
        >
          <div style={cbdStyle}>
            <div style={style.ch}>
              <div>
                <p style={style.cl}>
                  FRED CPIAUCSL (units=pc1) + M2SL · Monthly
                </p>
                <p style={style.ct}>Inflation & Money Supply</p>
                <p style={style.cm}>
                  CPI YoY % left axis + M2 money stock $tn right axis
                </p>
              </div>
            </div>
            {/* <canvas id="inflationChart" height="190"></canvas> */}
            <InflationChart />
            <p style={style.csrc}>
              Source: FRED CPIAUCSL + M2SL · Monthly · Free
            </p>
          </div>
          <div style={cbdStyle}>
            <div style={style.ch}>
              <div>
                <p style={style.cl}>
                  FRED GFDEGDP · Quarterly · NEW — fiscal stress driver
                </p>
                <p style={style.ct}>US Federal Debt to GDP</p>
                <p style={style.cm}>
                  Now above 120% — structural driver of central bank gold buying
                </p>
              </div>
              <span style={{ ...style.bBear, flexShrink: 0 }}>
                120%+ record
              </span>
            </div>
            {/* <canvas id="debtChart" height="190"></canvas> */}
            <DebtChart />
            <p style={style.csrc}>Source: FRED GFDEGDP · Quarterly · Free</p>
          </div>
        </div>

        <div style={cbdStyle}>
          <div style={style.ch}>
            <div>
              <p style={style.cl}>
                CME FedWatch · iframe embed · Real-time · Zero backend
              </p>
              <p style={style.ct}>Fed Rate Cut Probabilities (FedWatch)</p>
              <p style={style.cm}>
                Market-implied probability of Fed rate changes at each FOMC
                meeting
              </p>
            </div>
            <span style={{ ...style.bNeu, flexShrink: 0 }}>iframe only</span>
          </div>
          <div
            style={{
              background: "#0d0d1a",
              borderRadius: style.tokens.r,
              padding: "28px",
              textAlign: "center",
              color: "rgba(255,255,255,.3)",
              fontSize: "12px",
            }}
          >
            <p style={{ marginBottom: "6px", fontSize: "13px" }}>
              CME FedWatch Tool
            </p>
            <p style={{ fontSize: "10px", color: "rgba(255,255,255,.2)" }}>
              iframe src:
              https://www.cmegroup.com/markets/interest-rates/cme-fedwatch-tool.html
            </p>
            <p
              style={{
                fontSize: "10px",
                color: "rgba(255,255,255,.18)",
                marginTop: "4px",
              }}
            >
              Zero backend · No API key · Free embed
            </p>
          </div>
          <p style={style.csrc}>
            Source: CME Group FedWatch · Real-time probabilities from Fed Funds
            futures
          </p>
        </div>

        <div
          className="grid grid-cols-1 xl:grid-cols-2 gap-4"
          style={{ ...style.gap, marginTop: "18px" }}
        >
          <div style={cbdStyle}>
            <div style={style.ch}>
              <div>
                <p style={style.cl}>
                  Calculated: FRED CPIAUCSL ÷ GoldAPI · Monthly
                </p>
                <p style={style.ct}>Gold Price — Real vs Nominal</p>
                <p style={style.cm}>
                  Nominal price vs CPI-adjusted 2024 dollars
                </p>
              </div>
            </div>
            <DxyChart />
            <p style={style.csrc}>
              Source: GoldAPI.io (nominal) + FRED CPIAUCSL (CPI deflator)
            </p>
          </div>
          <div style={cbdStyle}>
            <div style={style.ch}>
              <div>
                <p style={style.cl}>
                  WGC Goldhub · gold-performance · Monthly download
                </p>
                <p style={style.ct}>Gold Returns vs Major Asset Classes</p>
                <p style={style.cm}>1yr, 3yr, 5yr, 10yr annualised returns</p>
              </div>
            </div>
            {/* <canvas id="assetReturnChart" height="190"></canvas> */}
            <AssetReturnChart />
            <p style={style.csrc}>
              Source: WGC Goldhub · gold.org/goldhub/data/gold-performance
            </p>
          </div>
        </div>

        <div style={{ ...cbdStyle, marginTop: 0 }}>
          <div style={style.ch}>
            <div>
              <p style={style.cl}>
                WGC Goldhub · gold-performance dataset · Monthly download
              </p>
              <p style={style.ct}>
                Gold Performance vs Other Assets — Key Periods
              </p>
              <p style={style.cm}>
                Annualised returns in USD · As at April 13, 2026
              </p>
            </div>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table style={{ ...style.dt, color: "rgba(255,255,255,0.75)" }}>
              <thead>
                <tr>
                  <th style={tableHeaderStyle}>Asset</th>
                  <th style={tableHeaderStyle}>1 Month</th>
                  <th style={tableHeaderStyle}>YTD 2026</th>
                  <th style={tableHeaderStyle}>1 Year</th>
                  <th style={tableHeaderStyle}>3 Year (ann.)</th>
                  <th style={tableHeaderStyle}>5 Year (ann.)</th>
                  <th style={tableHeaderStyle}>10 Year (ann.)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    style={{
                      ...tableCellStyle,
                      fontWeight: 600,
                      color: style.tokens.gold,
                    }}
                  >
                    Gold (XAU/USD)
                  </td>
                  <td style={{ ...tableCellStyle, color: "#4CAF50" }}>+5.8%</td>
                  <td style={{ ...tableCellStyle, color: "#4CAF50" }}>
                    +18.4%
                  </td>
                  <td style={{ ...tableCellStyle, color: "#4CAF50" }}>
                    +46.9%
                  </td>
                  <td style={{ ...tableCellStyle, color: "#4CAF50" }}>
                    +38.2%
                  </td>
                  <td style={{ ...tableCellStyle, color: "#4CAF50" }}>
                    +24.1%
                  </td>
                  <td style={{ ...tableCellStyle, color: "#4CAF50" }}>
                    +12.8%
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      ...tableCellStyle,
                      fontWeight: 600,
                      color: style.tokens.silL,
                    }}
                  >
                    Silver (XAG/USD)
                  </td>
                  <td style={{ ...tableCellStyle, color: "#F44336" }}>−6.4%</td>
                  <td style={{ ...tableCellStyle, color: "#F44336" }}>
                    −14.2%
                  </td>
                  <td style={{ ...tableCellStyle, color: "#4CAF50" }}>
                    +133.9%
                  </td>
                  <td style={{ ...tableCellStyle, color: "#4CAF50" }}>
                    +58.4%
                  </td>
                  <td style={{ ...tableCellStyle, color: "#4CAF50" }}>
                    +31.2%
                  </td>
                  <td style={{ ...tableCellStyle, color: "#4CAF50" }}>
                    +10.4%
                  </td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>S&P 500 (SPY)</td>
                  <td style={{ ...tableCellStyle, color: "#F44336" }}>−4.1%</td>
                  <td style={{ ...tableCellStyle, color: "#F44336" }}>−8.2%</td>
                  <td style={{ ...tableCellStyle, color: "#F44336" }}>−2.8%</td>
                  <td style={{ ...tableCellStyle, color: "#4CAF50" }}>+8.4%</td>
                  <td style={{ ...tableCellStyle, color: "#4CAF50" }}>
                    +14.2%
                  </td>
                  <td style={{ ...tableCellStyle, color: "#4CAF50" }}>
                    +11.6%
                  </td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>US Dollar (DXY)</td>
                  <td style={{ ...tableCellStyle, color: "#F44336" }}>−3.1%</td>
                  <td style={{ ...tableCellStyle, color: "#F44336" }}>−7.8%</td>
                  <td style={{ ...tableCellStyle, color: "#F44336" }}>−9.4%</td>
                  <td style={{ ...tableCellStyle, color: "#F44336" }}>−2.2%</td>
                  <td style={{ ...tableCellStyle, color: "#F44336" }}>−1.4%</td>
                  <td style={tableCellStyle}>+0.8%</td>
                </tr>
                <tr>
                  <td style={{ ...tableCellStyle, borderBottom: "none" }}>
                    Bitcoin (BTC)
                  </td>
                  <td
                    style={{
                      ...tableCellStyle,
                      borderBottom: "none",
                      color: "#F44336",
                    }}
                  >
                    −11.4%
                  </td>
                  <td
                    style={{
                      ...tableCellStyle,
                      borderBottom: "none",
                      color: "#F44336",
                    }}
                  >
                    −18.2%
                  </td>
                  <td
                    style={{
                      ...tableCellStyle,
                      borderBottom: "none",
                      color: "#4CAF50",
                    }}
                  >
                    +24.8%
                  </td>
                  <td
                    style={{
                      ...tableCellStyle,
                      borderBottom: "none",
                      color: "#4CAF50",
                    }}
                  >
                    +58.4%
                  </td>
                  <td
                    style={{
                      ...tableCellStyle,
                      borderBottom: "none",
                      color: "#4CAF50",
                    }}
                  >
                    +44.2%
                  </td>
                  <td
                    style={{
                      ...tableCellStyle,
                      borderBottom: "none",
                      color: "#4CAF50",
                    }}
                  >
                    +62.4%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={style.csrc}>
            Source: WGC Goldhub dataset + TradingView · Not financial advice
          </p>
        </div>

        <div style={{ ...style.ib, ...style.ig, marginTop: "18px" }}>
          <div style={style.ii}>⚡</div>
          <div>
            <p style={{ ...style.it, color: "#fff" }}>
              Why gold rose despite rising real yields (2022–2026)
            </p>
            <p style={{ ...style.ix, color: "rgba(255,255,255,.6)" }}>
              The traditional gold-yield model broke down after 2022. Central
              bank buying (1,000+ tonnes/yr), geopolitical risk premiums from
              the US-Iran conflict, and US fiscal concerns (debt/GDP 120%+)
              overwhelmed the yield relationship. Gold has repriced as a
              strategic reserve asset outside the dollar system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MacroSection;

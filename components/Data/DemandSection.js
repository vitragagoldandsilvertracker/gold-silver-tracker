import React from "react";
import * as style from "./styles.js";
import GoldDemandChart from "./Charts/goldDemandChart.js";
import GoldDonut from "./Charts/goldDonut.js";
import EtfFlowsChart from "./Charts/etfFlowsChart.js";
import CbChart from "./Charts/cbChart.js";

const DemandSection = () => {
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
    <section style={sectionStyle} id="demand">
      <div style={style.w}>
        <p style={style.slbl}>
          Section E · World Gold Council Goldhub · Quarterly Excel downloads ·
          Free
        </p>
        <h2 style={style.stitle}>
          Gold Demand by Sector — Central Banks, Investment & Jewellery
        </h2>
        <p style={style.sdesc}>
          WGC Goldhub is the authoritative source for global gold demand.
          Download quarterly Excel files, parse with SheetJS, store in Postgres.
          AISC production cost data (new) shows record mining margins in 2025–26
          — critical context for mining analysis.
        </p>

        <div
          className="grid grid-cols-1 lg:grid-cols-7 gap-4"
          style={{ ...style.gap }}
        >
          <div className="lg:col-span-5" style={cardStyle}>
            <div style={style.ch}>
              <div>
                <p style={style.cl}>
                  WGC Goldhub · gold-demand-by-country · Quarterly download
                </p>
                <p style={style.ct2}>Gold Demand by Sector — Annual Trend</p>
                <p style={style.cm}>
                  Jewellery / Investment / Central Banks / Technology ·
                  2016–2024 · Tonnes
                </p>
              </div>
            </div>
            <GoldDemandChart />
            <p style={style.csrc}>
              Source: WGC Goldhub · Quarterly Excel download · Parse with
              SheetJS
            </p>
          </div>

          <div
            className="lg:col-span-2"
            style={{ display: "flex", flexDirection: "column", gap: "14px" }}
          >
            <div style={cardStyle}>
              <p style={{ ...style.cl, marginBottom: "4px" }}>
                2024 sector split
              </p>
              <p
                style={{ ...style.ct, fontSize: "15px", marginBottom: "12px" }}
              >
                Demand breakdown
              </p>
              <div
                style={{ display: "flex", gap: "14px", alignItems: "center" }}
              >
                <div style={{ width: "110px", height: "110px", flexShrink: 0 }}>
                  <GoldDonut />
                </div>
                <div style={style.dl}>
                  <div style={style.dli}>
                    <div style={{ ...style.dld, background: "#C9A84C" }}></div>
                    Jewellery<span style={style.dlp}>41%</span>
                  </div>
                  <div style={style.dli}>
                    <div style={{ ...style.dld, background: "#1A7A4A" }}></div>
                    Investment<span style={style.dlp}>30%</span>
                  </div>
                  <div style={style.dli}>
                    <div style={{ ...style.dld, background: "#1E3A5F" }}></div>
                    Central Banks<span style={style.dlp}>22%</span>
                  </div>
                  <div style={style.dli}>
                    <div style={{ ...style.dld, background: "#A8A8B3" }}></div>
                    Technology<span style={style.dlp}>7%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Total Demand Card */}
            <div
              style={{
                ...style.cb,
                borderLeft: `3px solid ${style.tokens.gold}`,
                background: "#fff",
              }}
            >
              <p style={{ ...style.sl, marginBottom: "4px" }}>
                Total 2024 demand
              </p>
              <p
                style={{
                  fontFamily: '"DM Mono", monospace',
                  fontSize: "24px",
                  fontWeight: "500",
                  color: style.tokens.ink,
                }}
              >
                4,612t
              </p>
              <p
                style={{
                  fontSize: "11px",
                  color: style.tokens.muted,
                  marginTop: "3px",
                }}
              >
                2024 record · <strong>2025: 5,000t+ incl. OTC</strong> · US
                demand doubled to 679t
              </p>
            </div>

            {/* AISC Margin Card */}
            <div
              style={{
                ...style.cb,
                borderLeft: `3px solid ${style.tokens.grn}`,
                background: "#fff",
              }}
            >
              <p style={{ ...style.sl, marginBottom: "4px" }}>
                AISC vs spot margin · NEW
              </p>
              <p
                style={{
                  fontFamily: '"DM Mono", monospace',
                  fontSize: "24px",
                  fontWeight: "500",
                  color: style.tokens.grn,
                }}
              >
                +$3,378/oz
              </p>
              <p
                style={{
                  fontSize: "11px",
                  color: style.tokens.muted,
                  marginTop: "3px",
                }}
              >
                AISC ~$1,350/oz · Spot $4,728 · Record mining profit
              </p>
            </div>
          </div>
        </div>

        <div
          className="grid grid-cols-1 xl:grid-cols-2 gap-4"
          style={{ ...style.gap, marginTop: "20px" }}
        >
          <div style={cardStyle}>
            <div style={style.ch}>
              <div>
                <p style={style.cl}>
                  WGC Goldhub · gold-etfs-holdings-and-flows · Weekly Monday
                </p>
                <p style={style.ct2}>Gold ETF Flows by Region</p>
                <p style={style.cm}>
                  Monthly net flows · N.America / Europe / Asia · USD billions
                </p>
              </div>
            </div>
            <EtfFlowsChart />
            <p style={style.csrc}>
              Source: WGC Goldhub · Weekly Excel · Parse Monday 9am UTC
            </p>
          </div>
          <div style={cardStyle}>
            <div style={style.ch}>
              <div>
                <p style={style.cl}>
                  WGC Goldhub · gold-reserves-by-country · Monthly + Annual
                </p>
                <p style={style.ct2}>Net Central Bank Gold Purchases</p>
                <p style={style.cm}>
                  Annual net tonnes · 3 consecutive years above 1,000t post-2022
                </p>
              </div>
            </div>
            <CbChart />
            <p style={style.csrc}>
              Source: WGC Goldhub · Annual purchases series · Free
            </p>
          </div>
        </div>

        {/* Bottom Table: Official Gold Holdings */}
        <div style={{ ...cardStyle, marginTop: "20px" }}>
          <div style={style.ch}>
            <div>
              <p style={style.cl}>
                WGC Goldhub · Monthly · IMF COFER + WGC adjustments · As at Feb
                2026
              </p>
              <p style={style.ct2}>Official Gold Holdings by Country</p>
              <p style={style.cm}>
                Tonnes held + % of total reserves + 2024 net purchases
              </p>
            </div>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table style={style.dt}>
              <thead>
                <tr>
                  <th style={style.dtTh}>#</th>
                  <th style={style.dtTh}>Country</th>
                  <th style={style.dtTh}>Holdings (t)</th>
                  <th style={style.dtTh}>Reserves %</th>
                  <th style={style.dtTh}>2024 net buy</th>
                  <th style={style.dtTh}>Trend (vs USA=100%)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    rank: 1,
                    country: "🇺🇸 USA",
                    hold: "8,133",
                    pct: "71%",
                    buy: "—",
                    bar: "100%",
                    type: "neu",
                  },
                  {
                    rank: 2,
                    country: "🇩🇪 Germany",
                    hold: "3,353",
                    pct: "69%",
                    buy: "—",
                    bar: "41%",
                    type: "neu",
                  },
                  {
                    rank: 3,
                    country: "🇮🇹 Italy",
                    hold: "2,452",
                    pct: "66%",
                    buy: "—",
                    bar: "30%",
                    type: "neu",
                  },
                  {
                    rank: 4,
                    country: "🇨🇳 China",
                    hold: "2,264",
                    pct: "5%",
                    buy: "+44t",
                    bar: "28%",
                    type: "bull",
                  },
                  {
                    rank: 5,
                    country: "🇮🇳 India",
                    hold: "853",
                    pct: "10%",
                    buy: "+73t",
                    bar: "10%",
                    type: "bull",
                  },
                  {
                    rank: 6,
                    country: "🇹🇷 Turkey",
                    hold: "595",
                    pct: "32%",
                    buy: "+75t",
                    bar: "7%",
                    type: "bull",
                  },
                  {
                    rank: 7,
                    country: "🇵🇱 Poland",
                    hold: "420",
                    pct: "17%",
                    buy: "+90t",
                    bar: "5%",
                    type: "bull",
                  },
                ].map((row) => (
                  <tr key={row.rank}>
                    <td style={style.dtTd}>{row.rank}</td>
                    <td style={style.dtTd}>{row.country}</td>
                    <td style={{ ...style.dtTd, ...style.mono }}>{row.hold}</td>
                    <td style={{ ...style.dtTd, ...style.mono }}>{row.pct}</td>
                    <td style={style.dtTd}>
                      <span
                        style={{
                          ...style.bdg,
                          ...(row.type === "bull" ? style.bBull : style.bNeu),
                        }}
                      >
                        {row.buy}
                      </span>
                    </td>
                    <td style={style.dtTd}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <div style={style.mbw}>
                          <div style={{ ...style.mb, width: row.bar }}></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={style.csrc}>
            Source: WGC Goldhub · Monthly Excel · IMF COFER + WGC adjustments
          </p>
        </div>
      </div>
    </section>
  );
};

export default DemandSection;

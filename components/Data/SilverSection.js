import React from "react";
import * as style from "./styles.js";
import SilverDeficitChart from "./Charts/silverDeficitChart.js";
import SilverDonut from "./Charts/silverDonut.js";
import SilverTrendChart from "./Charts/silverTrendChart.js";
import EtfHoldingsChart from "./Charts/etfHoldingsChart.js";

const SilverSection = () => {
  // Common style for the standard section (white background)
  const sectionStyle = {
    ...style.sec,
  };

  const cardStyle = {
    ...style.cb,
    backgroundColor: "#fff",
    border: "1px solid rgba(0,0,0,0.08)",
  };

  return (
    <section style={sectionStyle} id="silver">
      <div style={style.w}>
        <p style={style.slbl}>
          Section F · Silver Institute annual seed data + iShares/SPDR daily CSV
          · All free
        </p>
        <h2 style={style.stitle}>
          Silver Market Data — Supply Deficit, Industrial Demand & ETF Holdings
        </h2>
        <p style={style.sdesc}>
          Silver Institute data pre-extracted and seeded in your database —
          update once per year in May. 5 consecutive supply deficits since 2021.
          Industrial demand hit record 680.5 Moz in 2024. GLD/SLV daily holdings
          from iShares and SPDR free CSVs are an institutional demand indicator.
        </p>

        <div style={style.ss}>
          <div style={style.sc}>
            <p style={style.sl}>2024 deficit</p>
            <p style={{ ...style.sv, color: style.tokens.red }}>−147 Moz</p>
            <p style={style.ss2}>5th consecutive year</p>
          </div>
          <div style={style.sc}>
            <p style={style.sl}>Industrial demand 2024</p>
            <p style={style.sv}>680.5 Moz</p>
            <p style={{ ...style.ss2, ...style.up }}>4th consecutive record</p>
          </div>
          <div style={style.sc}>
            <p style={style.sl}>Solar PV share</p>
            <p style={style.sv}>29%</p>
            <p style={style.ss2}>of industrial demand</p>
          </div>
          <div style={style.sc}>
            <p style={style.sl}>Mine production 2024</p>
            <p style={style.sv}>819.7 Moz</p>
            <p style={style.ss2}>+0.9% year-over-year</p>
          </div>
        </div>

        <div style={{ ...style.g2, ...style.gap }}>
          <div style={cardStyle}>
            <div style={style.ch}>
              <div>
                <p style={style.cl}>
                  Silver Institute · Annual seed data · Pre-extracted
                </p>
                <p style={style.ct2}>Silver Market Balance</p>
                <p style={style.cm}>
                  Positive = surplus · Negative = deficit · Million oz ·
                  2016–2025
                </p>
              </div>
            </div>
            {/* <canvas id="silverDeficitChart" height="210"></canvas> */}
            <SilverDeficitChart />
            <p style={style.csrc}>
              Source: Silver Institute World Silver Survey 2025
            </p>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "14px" }}
          >
            <div style={cardStyle}>
              <div style={style.ch}>
                <div>
                  <p style={style.cl}>Silver Institute · 2024 annual data</p>
                  <p style={style.ct2}>Industrial Demand by Application</p>
                  <p style={style.cm}>
                    Total industrial: 680.5 Moz · 4th consecutive record
                  </p>
                </div>
              </div>
              <div
                style={{ display: "flex", gap: "14px", alignItems: "center" }}
              >
                <div style={{ width: "110px", height: "110px", flexShrink: 0 }}>
                  {/* <canvas id="silverDonut"></canvas> */}
                  <SilverDonut />
                </div>
                <div style={style.dl}>
                  <div style={style.dli}>
                    <div style={{ ...style.dld, background: "#1E3A5F" }}></div>
                    Electronics<span style={style.dlp}>50%</span>
                  </div>
                  <div style={style.dli}>
                    <div style={{ ...style.dld, background: "#C9A84C" }}></div>
                    Solar PV<span style={style.dlp}>29%</span>
                  </div>
                  <div style={style.dli}>
                    <div style={{ ...style.dld, background: "#1A7A4A" }}></div>
                    Automotive/EV<span style={style.dlp}>12%</span>
                  </div>
                  <div style={style.dli}>
                    <div style={{ ...style.dld, background: "#A8A8B3" }}></div>
                    Other<span style={style.dlp}>9%</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Warning Box */}
            <div style={{ ...style.ins, ...style.ir }}>
              <div style={style.ii}>⚠️</div>
              <div>
                <p style={style.it}>Structural deficit: 5 consecutive years</p>
                <p style={style.ix}>
                  Cumulative 2021–2025 deficit: ~862 Moz — nearly one full year
                  of mine production. Supply cannot easily respond because ~72%
                  of silver is a by-product of other base metals.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ ...cardStyle, marginTop: "20px" }}>
          <div style={style.ch}>
            <div>
              <p style={style.cl}>
                Silver Institute · World Silver Survey 2025
              </p>
              <p style={style.ct2}>Silver Supply vs Demand — 2016 to 2025</p>
              <p style={style.cm}>
                Supply line (silver) vs Demand line (gold) · Shaded =
                deficit/surplus · Million troy oz
              </p>
            </div>
          </div>
          {/* <canvas id="silverTrendChart" height="160"></canvas> */}
          <SilverTrendChart />
          <p style={style.csrc}>
            Source: Silver Institute World Silver Survey 2025
          </p>
        </div>

        <div style={{ ...cardStyle, marginTop: "20px" }}>
          <div style={style.ch}>
            <div>
              <p style={style.cl}>
                iShares (SLV) + SPDR (GLD) · Daily free CSV download
              </p>
              <p style={style.ct2}>GLD & SLV ETF Holdings Trend</p>
              <p style={style.cm}>
                Ounces held over time — rising = institutional demand signal
              </p>
            </div>
            <span style={{ ...style.bdg, ...style.bGold, flexShrink: 0 }}>
              Institutional demand
            </span>
          </div>
          {/* <canvas id="etfHoldingsChart" height="170"></canvas> */}
          <EtfHoldingsChart />
          <div
            style={{
              ...style.ins,
              ...style.ib,
              marginTop: "12px",
              padding: "11px 14px",
            }}
          >
            <div style={{ ...style.ii, fontSize: "13px" }}>📥</div>
            <div>
              <p style={style.ix}>
                <strong>Daily Parsing:</strong> SLV (BlackRock) and GLD (SPDR)
                publish free daily CSVs. Use PapaParse in a daily cron (9am ET)
                to update these institutional demand indicators.
              </p>
            </div>
          </div>
          <p style={style.csrc}>
            Source: iShares (SLV) + SPDR (GLD) · Daily free CSV
          </p>
        </div>
      </div>
    </section>
  );
};

export default SilverSection;

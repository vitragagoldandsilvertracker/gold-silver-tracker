import React from "react";
import * as style from "./styles.js";
import CotGoldChart from "./Charts/cotGoldChart.js";
import CotSilverChart from "./Charts/cotSilverChart.js";
import CotCommChart from "./Charts/cotCommChart.js";

const CotSection = () => {
  const sectionStyle = {
    ...style.sec,
  };

  const cardStyle = {
    ...style.cb,
    backgroundColor: "#fff",
    border: "1px solid rgba(0,0,0,0.08)",
  };

  // Custom legend styles
  const cotlStyle = {
    display: "flex",
    gap: "16px",
    marginBottom: "8px",
    fontSize: "11px",
    color: "rgba(0,0,0,0.5)",
  };

  const cotliStyle = {
    display: "flex",
    alignItems: "center",
    gap: "6px",
  };

  const cotlsStyle = (color) => ({
    width: "10px",
    height: "10px",
    borderRadius: "2px",
    backgroundColor: color,
  });

  return (
    <section style={sectionStyle} id="cot">
      <div style={style.w}>
        <p style={style.slbl}>
          Section D · CFTC.gov · Socrata API · No key required · Weekly Friday
          3:30pm EST
        </p>
        <h2 style={style.stitle}>
          CFTC COT Report — Gold & Silver Futures Positioning
        </h2>
        <p style={style.sdesc}>
          Weekly Commitment of Traders report from CFTC.gov. Free public
          government data, no API key needed. Released every Friday for Tuesday
          positions. Managed money = hedge funds + large speculators. The same
          API response includes commercial hedger data — extract both fields for
          no extra cost.
        </p>

        <div style={style.ss}>
          <div style={style.sc}>
            <p style={style.sl}>Gold net longs (mgd money)</p>
            <p style={style.sv}>156,305</p>
            <p style={style.ss2}>contracts · Apr 7, 2026</p>
          </div>
          <div style={style.sc}>
            <p style={style.sl}>Silver net longs (mgd money)</p>
            <p style={style.sv}>23,417</p>
            <p style={style.ss2}>contracts · Apr 7, 2026</p>
          </div>
          <div style={style.sc}>
            <p style={style.sl}>Gold open interest</p>
            <p style={style.sv}>354,877</p>
            <p style={style.ss2}>total contracts</p>
          </div>
          <div style={style.sc}>
            <p style={style.sl}>Silver open interest</p>
            <p style={style.sv}>115,138</p>
            <p style={style.ss2}>total contracts</p>
          </div>
        </div>

        <div
          className="grid grid-cols-1 xl:grid-cols-2 gap-4"
          style={{ ...style.gap }}
        >
          <div>
            <div style={cotlStyle}>
              <div style={cotliStyle}>
                <div style={cotlsStyle("#C9A84C")}></div>Net managed money longs
              </div>
              <div style={cotliStyle}>
                <div style={cotlsStyle("rgba(201,168,76,.4)")}></div>Gold price
                (right axis)
              </div>
            </div>
            <div style={cardStyle}>
              <div style={style.ch}>
                <div>
                  <p style={style.cl}>CFTC.gov · Socrata API · No API key</p>
                  <p style={style.ct2}>Managed Money Positioning — Gold</p>
                  <p style={style.cm}>
                    Net longs (bars) + gold price (line) · COMEX 100oz contracts
                  </p>
                </div>
              </div>
              <CotGoldChart />
              <p style={style.csrc}>
                Source: CFTC Socrata API · Filter: GOLD · Weekly cron Friday 5pm
                EST
              </p>
            </div>
          </div>

          <div>
            <div style={cotlStyle}>
              <div style={cotliStyle}>
                <div style={cotlsStyle("#A8A8B3")}></div>Net managed money longs
              </div>
              <div style={cotliStyle}>
                <div style={cotlsStyle("rgba(168,168,179,.4)")}></div>Silver
                price (right axis)
              </div>
            </div>
            <div style={cardStyle}>
              <div style={style.ch}>
                <div>
                  <p style={style.cl}>
                    CFTC.gov · Same API call · Filter by silver · Weekly
                  </p>
                  <p style={style.ct2}>Managed Money Positioning — Silver</p>
                  <p style={style.cm}>
                    Net longs (bars) + silver price (line) · COMEX 5000oz
                    contracts
                  </p>
                </div>
              </div>
              <CotSilverChart />
              <p style={style.csrc}>
                Source: CFTC Socrata API · Filter: SILVER · Same weekly cron ·
                Free
              </p>
            </div>
          </div>
        </div>

        <div style={{ ...cardStyle, marginTop: "20px" }}>
          <div style={style.ch}>
            <div>
              <p style={style.cl}>
                CFTC.gov · Same dataset · comm_positions fields · zero extra API
                calls
              </p>
              <p style={style.ct2}>
                Commercial Hedger Positioning — Gold (Producers & Miners)
              </p>
              <p style={style.cm}>
                Commercials = gold miners hedging production · Extreme net
                shorts historically precede rallies
              </p>
            </div>
            <span style={{ ...style.bdg, ...style.bNeu, flexShrink: 0 }}>
              Contrarian signal
            </span>
          </div>
          {/* <canvas id="cotCommChart" height="150"></canvas> */}
          <CotCommChart />
          <p style={style.csrc}>
            Source: CFTC · comm_positions_long_all + comm_positions_short_all ·
            Same weekly API call
          </p>
        </div>

        <div style={{ ...style.ins, ...style.ig, marginTop: "20px" }}>
          <div style={style.ii}>📊</div>
          <div>
            <p style={style.it}>
              Reading COT: context and extremes matter most
            </p>
            <p style={style.ix}>
              When managed money net longs are at multi-year highs, the trade is
              crowded and vulnerable to reversal on any negative catalyst. At
              extreme lows (or net short), it often marks a bottom. Commercial
              hedgers who are extremely net short are locking in high prices —
              confirming their view that spot is elevated. Always compare to the
              52-week range of both series, not the absolute number. Note: The
              Oct–Nov 2025 reporting gap (federal funding lapse) requires null
              handling in charting code.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CotSection;

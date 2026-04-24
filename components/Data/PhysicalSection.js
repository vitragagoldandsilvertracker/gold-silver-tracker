import React from "react";
import * as style from "./styles.js";
import ComexGoldChart from "./Charts/comexGoldChart.js";
import ComexSilverChart from "./Charts/comexSilverChart.js";
import LbmaVaultChart from "./Charts/lbmaVaultChart.js";
import DeliveryChart from "./Charts/deliveryChart.js";

const PhysicalSection = () => {
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
    <section style={sectionStyle} id="physical">
      <div style={style.w}>
        <p style={style.slbl}>
          Section C · NEW — CME Group free daily XLS + LBMA monthly scrape · All
          automatable, $0/month
        </p>
        <h2 style={style.stitle}>
          Physical Gold & Silver Market — COMEX Inventory & LBMA Vaults
        </h2>
        <p style={style.sdesc}>
          COMEX warehouse inventory from CME Group (free daily XLS:
          cmegroup.com/delivery_reports/) and LBMA London vault holdings
          (monthly scrape). When registered stocks fall and paper leverage
          rises, physical supply stress increases. Nobody else shows these
          together for free.
        </p>

        <div
          className="grid grid-cols-1 xl:grid-cols-2 gap-4"
          style={{ ...style.gap }}
        >
          <div style={cardStyle}>
            <div style={style.ch}>
              <div>
                <p style={style.cl}>
                  CME Group · Gold_Stocks.xls · Daily free download · NEW
                </p>
                <p style={style.ct2}>COMEX Gold Inventory</p>
                <p style={style.cm}>
                  Registered (deliverable vs futures) + Eligible (stored, not
                  earmarked) · Million troy oz
                </p>
              </div>
              <span style={{ ...style.bdg, ...style.bBull, flexShrink: 0 }}>
                Well supplied
              </span>
            </div>
            <ComexGoldChart />
            <div
              style={{
                ...style.ins,
                ...style.ib,
                marginTop: "12px",
                padding: "11px 14px",
              }}
            >
              <div style={{ ...style.ii, fontSize: "13px" }}>ⓘ</div>
              <div>
                <p style={style.ix}>
                  Registered gold ~33.2M oz (1,034t) after major London-to-NY
                  inflow Jan–Feb 2026. Coverage ratio vs open interest: healthy.
                  Download: cmegroup.com/delivery_reports/Gold_Stocks.xls
                </p>
              </div>
            </div>
            <p style={style.csrc}>
              Source: CME Group · Daily free XLS · Parse registered + eligible
              cols with SheetJS
            </p>
          </div>

          <div style={cardStyle}>
            <div style={style.ch}>
              <div>
                <p style={style.cl}>
                  CME Group · Silver_Stocks.xls · Daily free download · NEW
                </p>
                <p style={style.ct2}>COMEX Silver Inventory</p>
                <p style={style.cm}>
                  Registered vs Eligible · Coverage ratio currently in stress
                  territory
                </p>
              </div>
              <span style={{ ...style.bdg, ...style.bWarn, flexShrink: 0 }}>
                Stress territory
              </span>
            </div>
            <ComexSilverChart />

            <div
              style={{
                marginTop: "14px",
                padding: "14px 16px",
                background: "var(--gold-bg)",
                borderRadius: "var(--r)",
                border: "1px solid rgba(201,168,76,.25)",
              }}
            >
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: "600",
                  color: "var(--gold-d)",
                  marginBottom: "8px",
                }}
              >
                COMEX Silver Physical Stress Index
              </p>
              <div style={style.sgb}>
                <div style={{ ...style.sgm, left: "62%" }}></div>
              </div>
              <div style={style.sgl}>
                <span>0 — Normal</span>
                <span>50 — Elevated</span>
                <span>100 — Extreme</span>
              </div>
              <p
                style={{
                  fontSize: "11px",
                  color: "var(--ink3)",
                  marginTop: "8px",
                }}
              >
                <strong>Score: 62/100</strong> — Coverage ratio 13.4% (stress
                &lt; 15%) · Paper leverage 7.5× · Registered declining
              </p>
            </div>
            <p style={style.csrc}>
              Source: CME Group · Daily free XLS · Stress index calculation
              manual
            </p>
          </div>
        </div>

        <div
          className="grid grid-cols-1 xl:grid-cols-2 gap-4"
          style={{ ...style.gap }}
        >
          <div style={cardStyle}>
            <div style={style.ch}>
              <div>
                <p style={style.cl}>
                  LBMA · lbma.org.uk/prices-and-data/london-vault-data · Monthly
                  scrape · NEW
                </p>
                <p style={style.ct2}>LBMA London Vault Holdings</p>
                <p style={style.cm}>
                  Gold + silver held in all London vaults incl. Bank of England
                  · Published 5th business day monthly
                </p>
              </div>
            </div>
            <LbmaVaultChart />
            <div
              style={{
                ...style.ins,
                ...style.ig,
                marginTop: "12px",
                padding: "11px 14px",
              }}
            >
              <div style={{ ...style.ii, fontSize: "13px" }}>🏦</div>
              <div>
                <p style={style.ix}>
                  <strong>Feb 2026:</strong> 9,210t gold (+0.56% MoM) & 27,065t
                  silver (−2.4% MoM). The London-to-NY gold flow of Jan 2025
                  partially reversed as EFP premium normalized.
                </p>
              </div>
            </div>
            <p style={style.csrc}>
              Source: LBMA · Monthly · Scrape page or download data CSV
            </p>
          </div>

          <div style={cardStyle}>
            <div style={style.ch}>
              <div>
                <p style={style.cl}>
                  CME Group · Delivery notices · Daily · NEW
                </p>
                <p style={style.ct2}>COMEX Gold & Silver Delivery Notices</p>
                <p style={style.cm}>
                  Physical vs cash settlement · Rising delivery = real demand
                  signal · Spiked Jan 2026
                </p>
              </div>
            </div>
            <DeliveryChart />
            <p style={style.csrc}>
              Source: CME Group ·
              cmegroup.com/solutions/clearing/operations-and-deliveries/nymex-delivery-notices.html
            </p>
          </div>
        </div>

        <div style={cardStyle}>
          <div style={style.ch}>
            <div>
              <p style={style.cl}>
                Calculated from CME Group + CFTC data · Daily
              </p>
              <p style={style.ct}>Paper vs Physical Coverage Summary</p>
              <p style={style.cm}>
                How many paper contracts exist vs physical metal available for
                immediate delivery
              </p>
            </div>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table style={style.dt}>
              <thead>
                <tr>
                  <th style={style.dtTh}>Metal</th>
                  <th style={style.dtTh}>Registered (deliverable)</th>
                  <th style={style.dtTh}>Total inventory</th>
                  <th style={style.dtTh}>Open interest</th>
                  <th style={style.dtTh}>Paper claims</th>
                  <th style={style.dtTh}>Coverage ratio</th>
                  <th style={style.dtTh}>Signal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={style.dtTd}>
                    <strong>Gold</strong>
                  </td>
                  <td style={{ ...style.dtTd, ...style.mono }}>
                    33.2M oz (1,034t)
                  </td>
                  <td style={{ ...style.dtTd, ...style.mono }}>39.6M oz</td>
                  <td style={{ ...style.dtTd, ...style.mono }}>
                    354,877 contracts
                  </td>
                  <td style={{ ...style.dtTd, ...style.mono }}>35.5M oz</td>
                  <td style={{ ...style.dtTd, ...style.mono }}>
                    <strong>93.5%</strong>
                  </td>
                  <td style={style.dtTd}>
                    <span style={{ ...style.bdg, ...style.bBull }}>Normal</span>
                  </td>
                </tr>
                <tr>
                  <td style={style.dtTd}>
                    <strong>Silver</strong>
                  </td>
                  <td style={{ ...style.dtTd, ...style.mono }}>82.0M oz</td>
                  <td style={{ ...style.dtTd, ...style.mono }}>297M oz</td>
                  <td style={{ ...style.dtTd, ...style.mono }}>
                    115,138 contracts
                  </td>
                  <td style={{ ...style.dtTd, ...style.mono }}>575.7M oz</td>
                  <td style={{ ...style.dtTd, ...style.mono }}>
                    <strong>13.4%</strong>
                  </td>
                  <td style={style.dtTd}>
                    <span style={{ ...style.bdg, ...style.bWarn }}>Stress</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={style.csrc}>
            Source: CME Group warehouse reports + CFTC open interest · Coverage
            = registered ÷ (open interest × contract size)
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhysicalSection;

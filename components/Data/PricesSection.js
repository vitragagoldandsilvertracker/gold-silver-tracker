import React, { useState } from "react";
import * as style from "./styles.js";
import GoldHistChart from "./Charts/goldHistChart.js";
import RadioChart from "./Charts/ratioChart.js";
import CurrChart from "./Charts/currChart.js";
import LbmaChart from "./Charts/lbmaChart.js";

const PricesSection = () => {
  const GOLD_SPOT = 4728.0;
  const SILV_SPOT = 73.0;

  const [gWeight, setGWeight] = useState(1);
  const [gUnit, setGUnit] = useState(1);
  const [gPurity, setGPurity] = useState(1);

  const [sWeight, setSWeight] = useState(1);
  const [sUnit, setSUnit] = useState(1);
  const [sPurity, setSPurity] = useState(0.999);

  const calcGold = () =>
    (gWeight * gUnit * gPurity * GOLD_SPOT).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  const calcSilver = () =>
    (sWeight * sUnit * sPurity * SILV_SPOT).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  const gUnitNames = {
    1: "troy oz",
    0.032151: "g",
    32.1507: "kg",
    0.375: "tola",
    1.20337: "tael",
    0.05: "dwt",
  };
  const gPurityNames = {
    1: "100%",
    0.9167: "91.7%",
    0.875: "87.5%",
    "0.750": "75%",
    0.583: "58.3%",
    0.417: "41.7%",
    0.999: "99.9%",
  };

  return (
    <section style={style.sec} id="prices">
      <div style={style.w}>
        <p style={style.slbl}>
          Section A · GoldAPI.io + TradingView + MetalpriceAPI + freegoldapi.com
        </p>
        <h2 style={style.stitle}>
          Gold Price Today & Silver Price Today — Live Spot Charts
        </h2>
        <p style={style.sdesc}>
          Real-time spot prices refreshed every 60 seconds via Redis cache.
          Interactive charts via TradingView (zero backend). Historical data
          from freegoldapi.com — free, no API key, 768 years of data,
          auto-updated daily.
        </p>

        <div style={style.ss}>
          <div style={style.sc}>
            <p style={style.sl}>Gold Spot</p>
            <p style={style.sv2}>$4,728</p>
            <p style={{ ...style.ss2, ...style.dn }}>▼ −$20.90 today</p>
          </div>
          <div style={style.sc}>
            <p style={style.sl}>Silver Spot</p>
            <p style={style.sv2}>$73.00</p>
            <p style={{ ...style.ss2, ...style.up }}>▲ +$0.15 today</p>
          </div>
          <div style={style.sc}>
            <p style={style.sl}>G/S Ratio</p>
            <p style={style.sv2}>64.8×</p>
            <p style={{ ...style.ss2 }} className="text-yellow-400">
              Hist avg 67×
            </p>
          </div>
          <div style={style.sc}>
            <p style={style.sl}>Silver in gold oz</p>
            <p style={style.sv2}>0.0154</p>
            <p style={{ ...style.ss2 }}>oz gold per oz silver</p>
          </div>
        </div>

        <div
          className="grid grid-cols-1 xl:grid-cols-2 gap-4"
          style={{ ...style.gap }}
        >
          <div style={style.cb}>
            <div style={style.ch}>
              <div>
                <p style={style.cl}>TradingView · OANDA:XAUUSD · Real-time</p>
                <p style={style.ct2}>Gold (XAU/USD)</p>
                <p style={style.cm}>
                  Full interactive — all timeframes, indicators, drawing tools
                </p>
              </div>
              <div style={style.trng}>
                <button style={{ ...style.tb, ...style.tbOn }}>1D</button>
                <button style={style.tb}>1W</button>
                <button style={style.tb}>1M</button>
                <button style={style.tb}>1Y</button>
                <button style={style.tb}>All</button>
              </div>
            </div>
            <div style={{ ...style.tvph, height: "260px" }}>
              <div style={style.tvic}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M2 13L6 8L9 10.5L13 5L16 8.5"
                    stroke="#C9A84C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span style={style.tvsym}>OANDA:XAUUSD</span>
              <span>TradingView advanced chart embeds here</span>
              <span style={style.tvcr}>
                script: tv.js · symbol: OANDA:XAUUSD · interval: D
              </span>
            </div>
            <p style={style.csrc}>
              Source: TradingView — OANDA:XAUUSD · LBMA/COMEX real-time data ·
              Zero backend · Free embed
            </p>
          </div>
          <div style={style.cb}>
            <div style={style.ch}>
              <div>
                <p style={style.cl}>TradingView · OANDA:XAGUSD · Real-time</p>
                <p style={style.ct2}>Silver (XAG/USD)</p>
                <p style={style.cm}>Full interactive — all timeframes</p>
              </div>
              <div style={style.trng}>
                <button style={{ ...style.tb, ...style.tbOn }}>1D</button>
                <button style={style.tb}>1W</button>
                <button style={style.tb}>1M</button>
                <button style={style.tb}>1Y</button>
                <button style={style.tb}>All</button>
              </div>
            </div>
            <div style={{ ...style.tvph, height: "260px" }}>
              <div style={style.tvic}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M2 12L5 9L8 11L11 6L16 9"
                    stroke="#A8A8B3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span style={style.tvsym}>OANDA:XAGUSD</span>
              <span>TradingView advanced chart embeds here</span>
              <span style={style.tvcr}>
                script: tv.js · symbol: OANDA:XAGUSD · interval: D
              </span>
            </div>
            <p style={style.csrc}>
              Source: TradingView — OANDA:XAGUSD · Real-time · Zero backend ·
              Free embed
            </p>
          </div>
        </div>

        <div
          className="grid grid-cols-1 xl:grid-cols-2 gap-4"
          style={{ ...style.gap }}
        >
          <div style={style.cb}>
            <div style={style.ch}>
              <div>
                <p style={style.cl}>Calculated: GoldAPI.io XAU÷XAG · Daily</p>
                <p style={style.ct2}>Gold/Silver Ratio — 20 Years</p>
                <p style={style.cm}>
                  Current 64.8× · 20yr avg 67× · 2020 peak 125×
                </p>
              </div>
            </div>
            <RadioChart />
            <p style={style.csrc}>
              Source: Calculated from GoldAPI.io XAU/XAG · Daily · Back to 2005
              · 67× avg line shown
            </p>
          </div>
          <div style={style.cb}>
            <div style={style.ch}>
              <div>
                <p style={style.cl}>
                  freegoldapi.com · No API key · Daily auto-update
                </p>
                <p style={style.ct2}>Gold Price — Long-Term History</p>
                <p style={style.cm}>
                  768 years of data available · Nominal USD per troy oz
                </p>
              </div>
              <div style={style.trng}>
                <button style={style.tb}>5Y</button>
                <button style={{ ...style.tb, ...style.tbOn }}>10Y</button>
                <button style={style.tb}>20Y</button>
                <button style={style.tb}>50Y</button>
              </div>
            </div>
            <GoldHistChart />
            <p style={style.csrc}>
              Source: freegoldapi.com — https://freegoldapi.com/data/latest.json
              · CORS-enabled · No API key · Free forever · Daily 6am UTC
              auto-update
            </p>
          </div>
        </div>

        <div
          className="grid grid-cols-1 xl:grid-cols-2 gap-4"
          style={{ ...style.gap }}
        >
          <div style={style.cb}>
            <div style={style.ch}>
              <div>
                <p style={style.cl}>
                  MetalpriceAPI.com · Daily cache · Free tier 100 req/mo
                </p>
                <p style={style.ct2}>Gold Price in Major Currencies</p>
                <p style={style.cm}>
                  USD, EUR, GBP, AUD, CAD, JPY, CHF, CNY · Updated daily 6am UTC
                </p>
              </div>
            </div>
            <CurrChart />
            <p style={style.csrc}>
              Source: MetalpriceAPI.com ·
              /v1/latest?base=USD&currencies=XAU,EUR,GBP,AUD,CAD,JPY,CHF,CNY ·
              Free tier 100 req/mo · Cache daily
            </p>
          </div>
          <div style={style.cb}>
            <div style={style.ch}>
              <div>
                <p style={style.cl}>
                  db.nomics.world/LBMA · Daily AM/PM benchmark · NEW source
                </p>
                <p style={style.ct2}>LBMA Gold Price Fix — AM & PM</p>
                <p style={style.cm}>
                  Official London benchmark used by miners, central banks &
                  institutions worldwide
                </p>
              </div>
            </div>
            <LbmaChart />
            <p style={style.csrc}>
              Source: db.nomics.world/LBMA or freegoldapi.com · LBMA AM/PM
              fixing prices · Daily · Free · The benchmark that matters to
              institutions
            </p>
          </div>
        </div>

        <div style={style.cb}>
          <div style={style.ch}>
            <div>
              <p style={style.cl}>
                TradingView · COMEX:SI1! · Silver futures · NEW
              </p>
              <p style={style.ct2}>Silver Front Month Futures (COMEX:SI1!)</p>
              <p style={style.cm}>
                Backwardation (spot &gt; futures) = physical shortage signal ·
                Monitor contango/backwardation shifts · Key indicator in 2025–26
                silver market
              </p>
            </div>
          </div>
          <div style={{ ...style.tvph, height: "180px" }}>
            <div style={style.tvic}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M2 11L5 8L8 10L11 5L14 7L16 5"
                  stroke="#A8A8B3"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span style={style.tvsym}>COMEX:SI1!</span>
            <span>TradingView — Silver front month futures</span>
            <span style={style.tvcr}>
              script: tv.js · symbol: COMEX:SI1! · zero backend
            </span>
          </div>
          <p style={style.csrc}>
            Source: TradingView — COMEX:SI1! · Real-time futures · Zero backend
            · Backwardation = physical shortage signal · Critical given current
            silver market dynamics
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "1px",
            background: style.tokens.bdr,
            border: `1px solid ${style.tokens.bdr}`,
            borderRadius: style.tokens.rl,
            overflow: "hidden",
            marginTop: "18px",
          }}
        >
          <div style={style.sc}>
            <p style={style.sl}>Gold 52-wk High</p>
            <p style={{ ...style.sv, color: style.tokens.grn }}>$5,602</p>
            <p style={style.ss2}>Jan 28, 2026 (ATH)</p>
          </div>
          <div style={style.sc}>
            <p style={style.sl}>Gold 52-wk Low</p>
            <p className="text-yellow-700">$3,218</p>
            <p style={style.ss2}>Apr 2025</p>
          </div>
          <div style={style.sc}>
            <p style={style.sl}>Silver 52-wk High</p>
            <p style={{ ...style.sv, color: style.tokens.grn }}>$121</p>
            <p style={style.ss2}>Jan 2026 (ATH)</p>
          </div>
          <div style={style.sc}>
            <p style={style.sl}>Silver 52-wk Low</p>
            <p className="text-black">$28.80</p>
            <p style={style.ss2}>Apr 2025</p>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "1px",
            background: style.tokens.bdr,
            border: `1px solid ${style.tokens.bdr}`,
            borderRadius: style.tokens.rl,
            overflow: "hidden",
            marginTop: "1px",
            marginBottom: "18px",
          }}
        >
          <div style={style.sc}>
            <p style={style.sl}>Gold YTD return</p>
            <p style={{ ...style.sv, ...style.up }}>+18.4%</p>
            <p style={style.ss2}>Jan 1 → Apr 13, 2026</p>
          </div>
          <div style={style.sc}>
            <p style={style.sl}>Silver YTD return</p>
            <p style={{ ...style.sv, ...style.up }}>+133.9%</p>
            <p style={style.ss2}>Jan 1, 2025 → Apr 13, 2026</p>
          </div>
          <div style={style.sc}>
            <p style={style.sl}>Gold vs S&P 500 YTD</p>
            <p style={{ ...style.sv, ...style.up }}>+18.4% vs −8.2%</p>
            <p style={style.ss2}>Gold outperforming in 2026</p>
          </div>
          <div style={style.sc}>
            <p style={style.sl}>ATH pullback (gold)</p>
            <p style={{ ...style.sv, color: style.tokens.amb }}>−15.6%</p>
            <p style={style.ss2}>From $5,602 peak</p>
          </div>
        </div>

        <div style={{ ...style.cb, marginTop: "18px" }} id="gold-per-gram">
          <div style={style.ch}>
            <div>
              <p style={style.cl}>
                Calculated from GoldAPI.io spot price · Real-time · High search
                volume keyword
              </p>
              <p style={style.ct2}>
                Gold Price Per Gram Today — All Units & Purities
              </p>
              <p style={style.cm}>
                At $4,728/oz spot · 1 troy oz = 31.1035 grams · Updated every 60
                seconds
              </p>
            </div>
            <span style={{ ...style.bGold, flexShrink: 0 }}>
              Per gram: $152.05
            </span>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table style={style.dt} id="gramTable">
              <thead>
                <tr>
                  <th style={style.dtTh}>Unit</th>
                  <th style={style.dtTh}>24K (999 fine)</th>
                  <th style={style.dtTh}>22K (91.7%)</th>
                  <th style={style.dtTh}>21K (87.5%)</th>
                  <th style={style.dtTh}>18K (75%)</th>
                  <th style={style.dtTh}>14K (58.3%)</th>
                  <th style={style.dtTh}>10K (41.7%)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={style.dtTd}>
                    <strong>1 Troy Ounce</strong>
                  </td>
                  <td style={{ ...style.dtTd, ...style.mono, ...style.up }}>
                    <strong>$4,728.00</strong>
                  </td>
                  <td style={{ ...style.dtTd, ...style.mono }}>$4,335.58</td>
                  <td style={{ ...style.dtTd, ...style.mono }}>$4,137.00</td>
                  <td style={{ ...style.dtTd, ...style.mono }}>$3,546.00</td>
                  <td style={{ ...style.dtTd, ...style.mono }}>$2,756.52</td>
                  <td style={{ ...style.dtTd, ...style.mono }}>$1,971.58</td>
                </tr>
                <tr>
                  <td style={style.dtTd}>
                    <strong>1 Gram</strong>
                  </td>
                  <td style={{ ...style.dtTd, ...style.mono, ...style.up }}>
                    <strong>$152.05</strong>
                  </td>
                  <td style={{ ...style.dtTd, ...style.mono }}>$139.43</td>
                  <td style={{ ...style.dtTd, ...style.mono }}>$133.04</td>
                  <td style={{ ...style.dtTd, ...style.mono }}>$114.04</td>
                  <td style={{ ...style.dtTd, ...style.mono }}>$88.64</td>
                  <td style={{ ...style.dtTd, ...style.mono }}>$63.41</td>
                </tr>
                <tr>
                  <td style={style.dtTd}>
                    <strong>5 Grams</strong>
                  </td>
                  <td style={{ ...style.dtTd, ...style.mono }}>$760.26</td>
                  <td style={{ ...style.dtTd, ...style.mono }}>$697.14</td>
                  <td style={{ ...style.dtTd, ...style.mono }}>$665.22</td>
                  <td style={{ ...style.dtTd, ...style.mono }}>$570.18</td>
                  <td style={{ ...style.dtTd, ...style.mono }}>$443.19</td>
                  <td style={{ ...style.dtTd, ...style.mono }}>$317.05</td>
                </tr>
                <tr>
                  <td style={style.dtTd}>
                    <strong>10 Grams</strong>
                  </td>
                  <td style={{ ...style.dtTd, ...style.mono }}>$1,520.52</td>
                  <td style={{ ...style.dtTd, ...style.mono }}>$1,394.28</td>
                  <td style={{ ...style.dtTd, ...style.mono }}>$1,330.46</td>
                  <td style={{ ...style.dtTd, ...style.mono }}>$1,140.39</td>
                  <td style={{ ...style.dtTd, ...style.mono }}>$886.38</td>
                  <td style={{ ...style.dtTd, ...style.mono }}>$634.10</td>
                </tr>
                <tr>
                  <td style={style.dtTd}>
                    <strong>1 Kilogram</strong>
                  </td>
                  <td style={{ ...style.dtTd, ...style.mono, ...style.up }}>
                    <strong>$152,053</strong>
                  </td>
                  <td style={{ ...style.dtTd, ...style.mono }}>$139,433</td>
                  <td style={{ ...style.dtTd, ...style.mono }}>$133,046</td>
                  <td style={{ ...style.dtTd, ...style.mono }}>$114,040</td>
                  <td style={{ ...style.dtTd, ...style.mono }}>$88,639</td>
                  <td style={{ ...style.dtTd, ...style.mono }}>$63,406</td>
                </tr>
                <tr>
                  <td style={style.dtTd}>
                    <strong>1 Tola (11.66g)</strong>
                  </td>
                  <td style={{ ...style.dtTd, ...style.mono }}>$1,772.9</td>
                  <td style={{ ...style.dtTd, ...style.mono }}>$1,624.8</td>
                  <td style={{ ...style.dtTd, ...style.mono }}>$1,551.3</td>
                  <td style={{ ...style.dtTd, ...style.mono }}>$1,329.6</td>
                  <td style={{ ...style.dtTd, ...style.mono }}>$1,033.5</td>
                  <td style={{ ...style.dtTd, ...style.mono }}>$739.3</td>
                </tr>
                <tr>
                  <td style={{ ...style.dtTd, ...style.dtTrLastTd }}>
                    <strong>1 Tael (37.43g)</strong>
                  </td>
                  <td
                    style={{
                      ...style.dtTd,
                      ...style.dtTrLastTd,
                      ...style.mono,
                    }}
                  >
                    $5,693.3
                  </td>
                  <td
                    style={{
                      ...style.dtTd,
                      ...style.dtTrLastTd,
                      ...style.mono,
                    }}
                  >
                    $5,220.8
                  </td>
                  <td
                    style={{
                      ...style.dtTd,
                      ...style.dtTrLastTd,
                      ...style.mono,
                    }}
                  >
                    $4,981.6
                  </td>
                  <td
                    style={{
                      ...style.dtTd,
                      ...style.dtTrLastTd,
                      ...style.mono,
                    }}
                  >
                    $4,269.9
                  </td>
                  <td
                    style={{
                      ...style.dtTd,
                      ...style.dtTrLastTd,
                      ...style.mono,
                    }}
                  >
                    $3,319.3
                  </td>
                  <td
                    style={{
                      ...style.dtTd,
                      ...style.dtTrLastTd,
                      ...style.mono,
                    }}
                  >
                    $2,373.8
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={style.csrc}>
            Source: GoldAPI.io spot price · Calculated: spot ÷ 31.1035 × purity
            factor · Updated every 60 seconds · For jewellery valuation only —
            not dealer buyback prices
          </p>
        </div>

        <div style={{ ...style.cb, marginTop: "18px" }} id="silver-per-gram">
          <div style={style.ch}>
            <div>
              <p style={style.cl}>
                Calculated from GoldAPI.io spot · Real-time
              </p>
              <p style={style.ct2}>Silver Price Per Gram Today — All Units</p>
              <p style={style.cm}>
                At $73.00/oz spot · 1 troy oz = 31.1035 grams
              </p>
            </div>
            <span style={{ ...style.bNeu, flexShrink: 0 }}>
              Per gram: $2.35
            </span>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table style={style.dt}>
              <thead>
                <tr>
                  <th style={style.dtTh}>Unit</th>
                  <th style={style.dtTh}>999 Fine (pure)</th>
                  <th style={style.dtTh}>925 Sterling</th>
                  <th style={style.dtTh}>900 Coin silver</th>
                  <th style={style.dtTh}>800 Continental</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={style.dtTd}>
                    <strong>1 Troy Ounce</strong>
                  </td>
                  <td style={{ ...style.dtTd, ...style.mono, ...style.up }}>
                    <strong>$73.00</strong>
                  </td>
                  <td style={{ ...style.dtTd, ...style.mono }}>$67.53</td>
                  <td style={{ ...style.dtTd, ...style.mono }}>$65.70</td>
                  <td style={{ ...style.dtTd, ...style.mono }}>$58.40</td>
                </tr>
                <tr>
                  <td style={style.dtTd}>
                    <strong>1 Gram</strong>
                  </td>
                  <td style={{ ...style.dtTd, ...style.mono, ...style.up }}>
                    <strong>$2.35</strong>
                  </td>
                  <td style={{ ...style.dtTd, ...style.mono }}>$2.17</td>
                  <td style={{ ...style.dtTd, ...style.mono }}>$2.11</td>
                  <td style={{ ...style.dtTd, ...style.mono }}>$1.88</td>
                </tr>
                <tr>
                  <td style={style.dtTd}>
                    <strong>10 Grams</strong>
                  </td>
                  <td style={{ ...style.dtTd, ...style.mono }}>$23.47</td>
                  <td style={{ ...style.dtTd, ...style.mono }}>$21.71</td>
                  <td style={{ ...style.dtTd, ...style.mono }}>$21.12</td>
                  <td style={{ ...style.dtTd, ...style.mono }}>$18.78</td>
                </tr>
                <tr>
                  <td style={style.dtTd}>
                    <strong>100 Grams</strong>
                  </td>
                  <td style={{ ...style.dtTd, ...style.mono }}>$234.70</td>
                  <td style={{ ...style.dtTd, ...style.mono }}>$217.10</td>
                  <td style={{ ...style.dtTd, ...style.mono }}>$211.23</td>
                  <td style={{ ...style.dtTd, ...style.mono }}>$187.76</td>
                </tr>
                <tr>
                  <td style={style.dtTd}>
                    <strong>1 Kilogram</strong>
                  </td>
                  <td style={{ ...style.dtTd, ...style.mono, ...style.up }}>
                    <strong>$2,347</strong>
                  </td>
                  <td style={{ ...style.dtTd, ...style.mono }}>$2,171</td>
                  <td style={{ ...style.dtTd, ...style.mono }}>$2,112</td>
                  <td style={{ ...style.dtTd, ...style.mono }}>$1,878</td>
                </tr>
                <tr>
                  <td style={{ ...style.dtTd, ...style.dtTrLastTd }}>
                    <strong>1 oz Silver Eagle (1 oz)</strong>
                  </td>
                  <td
                    style={{
                      ...style.dtTd,
                      ...style.dtTrLastTd,
                      ...style.mono,
                    }}
                  >
                    $73.00 + premium
                  </td>
                  <td
                    style={{
                      ...style.dtTd,
                      ...style.dtTrLastTd,
                      color: style.tokens.muted,
                    }}
                    colSpan="3"
                  >
                    Dealer premium typically $5–8/oz above spot
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={style.csrc}>
            Source: GoldAPI.io spot price · Calculated: spot ÷ 31.1035 × purity
            factor · Updated every 60 seconds
          </p>
        </div>

        <div style={{ paddingTop: "8px" }} id="gold-price-calculator">
          <div style={{ ...style.cb, marginTop: "18px" }} id="calculator">
            <div>
              <div>
                <p style={style.cl}>
                  Interactive tool · Calculated client-side · No API call needed
                </p>
                <h2
                  style={{
                    ...style.stitle,
                    fontSize: "20px",
                    marginBottom: "2px",
                  }}
                >
                  Gold & Silver Melt Value Calculator
                </h2>
                <p style={{ ...style.ct, display: "none" }}>
                  Gold & Silver Price Calculator
                </p>
                <p style={style.cm}>
                  Calculate the value of your gold or silver holdings by weight,
                  unit and purity
                </p>
              </div>
              <span style={{ ...style.bGold, flexShrink: 0 }}>
                No sign-up needed
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div
                style={{
                  background: style.tokens.goldBg,
                  border: "1px solid rgba(201,168,76,.25)",
                  borderRadius: style.tokens.r,
                  padding: "20px",
                }}
              >
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    color: style.tokens.goldD,
                    marginBottom: "14px",
                  }}
                >
                  Gold Calculator
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "10px",
                    marginBottom: "12px",
                  }}
                >
                  <div>
                    <label
                      style={{
                        fontSize: "11px",
                        color: style.tokens.muted,
                        display: "block",
                        marginBottom: "4px",
                      }}
                    >
                      Weight
                    </label>
                    <input
                      type="number"
                      value={gWeight}
                      min="0"
                      step="0.1"
                      onChange={(e) =>
                        setGWeight(parseFloat(e.target.value) || 0)
                      }
                      style={{
                        width: "100%",
                        padding: "8px 10px",
                        border: "1px solid rgba(201,168,76,.3)",
                        borderRadius: "6px",
                        background: "white",
                        fontSize: "14px",
                        fontFamily: '"DM Mono",monospace',
                      }}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        fontSize: "11px",
                        color: style.tokens.muted,
                        display: "block",
                        marginBottom: "4px",
                      }}
                    >
                      Unit
                    </label>
                    <select
                      value={gUnit}
                      onChange={(e) => setGUnit(parseFloat(e.target.value))}
                      style={{
                        width: "100%",
                        padding: "8px 10px",
                        border: "1px solid rgba(201,168,76,.3)",
                        borderRadius: "6px",
                        background: "white",
                        fontSize: "13px",
                      }}
                    >
                      <option value="1">Troy Ounce</option>
                      <option value="0.032151">Gram</option>
                      <option value="32.1507">Kilogram</option>
                      <option value="0.375">Tola (11.66g)</option>
                      <option value="1.20337">Tael (37.43g)</option>
                      <option value="0.05">Pennyweight</option>
                    </select>
                  </div>
                </div>
                <div style={{ marginBottom: "12px" }}>
                  <label
                    style={{
                      fontSize: "11px",
                      color: style.tokens.muted,
                      display: "block",
                      marginBottom: "4px",
                    }}
                  >
                    Purity (Karat)
                  </label>
                  <select
                    value={gPurity}
                    onChange={(e) => setGPurity(parseFloat(e.target.value))}
                    style={{
                      width: "100%",
                      padding: "8px 10px",
                      border: "1px solid rgba(201,168,76,.3)",
                      borderRadius: "6px",
                      background: "white",
                      fontSize: "13px",
                    }}
                  >
                    <option value="1">24K — 999 Fine (100%)</option>
                    <option value="0.9167">22K (91.67%)</option>
                    <option value="0.875">21K (87.5%)</option>
                    <option value="0.750">18K (75%)</option>
                    <option value="0.583">14K (58.3%)</option>
                    <option value="0.417">10K (41.7%)</option>
                    <option value="0.999">Bullion bar (999.9)</option>
                  </select>
                </div>
                <div
                  style={{
                    background: "white",
                    borderRadius: style.tokens.r,
                    padding: "14px 16px",
                    border: "1px solid rgba(201,168,76,.3)",
                  }}
                >
                  <p
                    style={{
                      fontSize: "11px",
                      color: style.tokens.muted,
                      marginBottom: "4px",
                    }}
                  >
                    Estimated value at $4,728/oz spot
                  </p>
                  <p
                    style={{
                      fontFamily: '"DM Mono",monospace',
                      fontSize: "28px",
                      fontWeight: 500,
                      color: style.tokens.goldD,
                    }}
                  >
                    ${calcGold()}
                  </p>
                  <p
                    style={{
                      fontSize: "11px",
                      color: style.tokens.muted,
                      marginTop: "3px",
                    }}
                  >
                    {gWeight} {gUnitNames[gUnit]} × {gPurityNames[gPurity]}{" "}
                    purity × ${GOLD_SPOT.toLocaleString()}/oz
                  </p>
                </div>
              </div>

              <div
                style={{
                  background: "#F8F8FB",
                  border: "1px solid rgba(168,168,179,.3)",
                  borderRadius: style.tokens.r,
                  padding: "20px",
                }}
              >
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    color: style.tokens.ink3,
                    marginBottom: "14px",
                  }}
                >
                  Silver Calculator
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "10px",
                    marginBottom: "12px",
                  }}
                >
                  <div>
                    <label
                      style={{
                        fontSize: "11px",
                        color: style.tokens.muted,
                        display: "block",
                        marginBottom: "4px",
                      }}
                    >
                      Weight
                    </label>
                    <input
                      type="number"
                      value={sWeight}
                      min="0"
                      step="0.1"
                      onChange={(e) =>
                        setSWeight(parseFloat(e.target.value) || 0)
                      }
                      style={{
                        width: "100%",
                        padding: "8px 10px",
                        border: "1px solid rgba(168,168,179,.3)",
                        borderRadius: "6px",
                        background: "white",
                        fontSize: "14px",
                        fontFamily: '"DM Mono",monospace',
                      }}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        fontSize: "11px",
                        color: style.tokens.muted,
                        display: "block",
                        marginBottom: "4px",
                      }}
                    >
                      Unit
                    </label>
                    <select
                      value={sUnit}
                      onChange={(e) => setSUnit(parseFloat(e.target.value))}
                      style={{
                        width: "100%",
                        padding: "8px 10px",
                        border: "1px solid rgba(168,168,179,.3)",
                        borderRadius: "6px",
                        background: "white",
                        fontSize: "13px",
                      }}
                    >
                      <option value="1">Troy Ounce</option>
                      <option value="0.032151">Gram</option>
                      <option value="32.1507">Kilogram</option>
                      <option value="0.375">Tola</option>
                    </select>
                  </div>
                </div>
                <div style={{ marginBottom: "12px" }}>
                  <label
                    style={{
                      fontSize: "11px",
                      color: style.tokens.muted,
                      display: "block",
                      marginBottom: "4px",
                    }}
                  >
                    Purity
                  </label>
                  <select
                    value={sPurity}
                    onChange={(e) => setSPurity(parseFloat(e.target.value))}
                    style={{
                      width: "100%",
                      padding: "8px 10px",
                      border: "1px solid rgba(168,168,179,.3)",
                      borderRadius: "6px",
                      background: "white",
                      fontSize: "13px",
                    }}
                  >
                    <option value="0.999">.999 Fine (bullion)</option>
                    <option value="0.925">925 Sterling</option>
                    <option value="0.900">900 (US Coin silver)</option>
                    <option value="0.800">800 Continental</option>
                  </select>
                </div>
                <div
                  style={{
                    background: "white",
                    borderRadius: style.tokens.r,
                    padding: "14px 16px",
                    border: "1px solid rgba(168,168,179,.3)",
                  }}
                >
                  <p
                    style={{
                      fontSize: "11px",
                      color: style.tokens.muted,
                      marginBottom: "4px",
                    }}
                  >
                    Estimated value at $73.00/oz spot
                  </p>
                  <p
                    style={{
                      fontFamily: '"DM Mono",monospace',
                      fontSize: "28px",
                      fontWeight: 500,
                      color: style.tokens.ink3,
                    }}
                  >
                    ${calcSilver()}
                  </p>
                  <p
                    style={{
                      fontSize: "11px",
                      color: style.tokens.muted,
                      marginTop: "3px",
                    }}
                  >
                    {sWeight} unit(s) × {sPurity * 100}% purity × ${SILV_SPOT}
                    /oz
                  </p>
                </div>
              </div>
            </div>

            <div
              style={{ ...style.ib, marginTop: "14px", padding: "11px 14px" }}
            >
              <div style={{ ...style.ii, fontSize: "13px" }}>⚠</div>
              <div>
                <p style={style.ix}>
                  This calculator shows <strong>melt value</strong> only — the
                  value of the metal content at spot price. Dealers typically
                  pay 85–95% of melt value for scrap. Numismatic coins and
                  certified bullion trade at premiums above melt value. Not
                  financial advice.
                </p>
              </div>
            </div>
            <p style={style.csrc}>
              Source: GoldAPI.io live spot price · Calculator runs client-side
              in your browser · No data sent to any server · Updated every 60
              seconds
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricesSection;

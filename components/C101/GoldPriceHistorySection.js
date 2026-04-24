import React from "react";
import * as style from "./styles.js";

const GoldPriceHistory = () => {
  return (
    <section className="sec prose" id="gold-price-history" style={style.sec}>
      <p className="sec-label" style={style.secLabel}>
        Gold price history
      </p>
      <h2 style={style.secH2}>
        Gold Price History: Year by Year (2000&ndash;2026)
      </h2>

      <p style={style.proseP}>
        Gold has been freely traded since 1971, when Nixon closed the gold
        window and ended dollar convertibility. Over that 55-year span it has
        compounded at roughly 8&ndash;9% per year &mdash; more than inflation
        (around 4% annually) but less than equities in their best decades. The
        chart below isn&rsquo;t just numbers; each move tells a macroeconomic
        story.
      </p>

      <div style={{ overflowX: "auto", margin: "24px 0" }}>
        <table
          className="ctbl"
          style={{ ...style.ctbl, ...style.tableWrapper }}
        >
          <thead>
            <tr style={style.ctblTr}>
              <th style={style.ctblTh}>Year</th>
              <th style={style.ctblTh}>Annual avg (USD/oz)</th>
              <th style={style.ctblTh}>Year high</th>
              <th style={style.ctblTh}>Year low</th>
              <th style={style.ctblTh}>Key driver</th>
            </tr>
          </thead>
          <tbody>
            <tr style={style.ctblTr}>
              <td style={style.ctblTd}>
                <strong>2000</strong>
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $279
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $314
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $255
              </td>
              <td style={style.ctblTd}>
                End of 20-year bear market; dot-com era, central bank sales
              </td>
            </tr>
            <tr style={style.ctblTr}>
              <td style={style.ctblTd}>
                <strong>2001</strong>
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $271
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $293
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $256
              </td>
              <td style={style.ctblTd}>
                9/11 brief spike, then fell back; USD still strong
              </td>
            </tr>
            <tr style={style.ctblTr}>
              <td style={style.ctblTd}>
                <strong>2002</strong>
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $310
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $349
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $278
              </td>
              <td style={style.ctblTd}>
                Dollar weakens; stock market losses send investors to gold
              </td>
            </tr>
            <tr style={style.ctblTr}>
              <td style={style.ctblTd}>
                <strong>2003</strong>
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $363
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $416
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $320
              </td>
              <td style={style.ctblTd}>
                Iraq War; early signs of the bull market
              </td>
            </tr>
            <tr style={style.ctblTr}>
              <td style={style.ctblTd}>
                <strong>2004</strong>
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $410
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $455
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $375
              </td>
              <td style={style.ctblTd}>
                Global growth, commodity supercycle begins
              </td>
            </tr>
            <tr style={style.ctblTr}>
              <td style={style.ctblTd}>
                <strong>2005</strong>
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $445
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $537
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $411
              </td>
              <td style={style.ctblTd}>
                USD weakness, emerging market demand growth
              </td>
            </tr>
            <tr style={style.ctblTr}>
              <td style={style.ctblTd}>
                <strong>2006</strong>
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $604
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $725
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $520
              </td>
              <td style={style.ctblTd}>
                Breaking $600 for the first time since the 1980s
              </td>
            </tr>
            <tr style={style.ctblTr}>
              <td style={style.ctblTd}>
                <strong>2007</strong>
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $696
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $841
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $608
              </td>
              <td style={style.ctblTd}>
                Subprime cracks appear; safe-haven demand builds
              </td>
            </tr>
            <tr style={style.ctblTr}>
              <td style={style.ctblTd}>
                <strong>2008</strong>
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $872
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $1,011
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $713
              </td>
              <td style={style.ctblTd}>
                Financial crisis; brief $1,000 touch, then sold to cover losses
              </td>
            </tr>
            <tr style={style.ctblTr}>
              <td style={style.ctblTd}>
                <strong>2009</strong>
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $972
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $1,213
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $802
              </td>
              <td style={style.ctblTd}>
                QE begins; central banks turn net buyers
              </td>
            </tr>
            <tr style={style.ctblTr}>
              <td style={style.ctblTd}>
                <strong>2010</strong>
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $1,225
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $1,421
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $1,058
              </td>
              <td style={style.ctblTd}>
                Eurozone debt crisis; ETF demand surges
              </td>
            </tr>
            <tr style={style.ctblTr}>
              <td style={style.ctblTd}>
                <strong>2011</strong>
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $1,572
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                <strong>$1,921</strong>
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $1,317
              </td>
              <td style={style.ctblTd}>
                ATH at time: Eurozone crisis, US debt downgrade, QE2
              </td>
            </tr>
            <tr style={style.ctblTr}>
              <td style={style.ctblTd}>
                <strong>2012</strong>
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $1,669
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $1,792
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $1,540
              </td>
              <td style={style.ctblTd}>Consolidation after 2011 peak</td>
            </tr>
            <tr style={style.ctblTr}>
              <td style={style.ctblTd}>
                <strong>2013</strong>
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $1,411
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $1,694
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $1,180
              </td>
              <td style={style.ctblTd}>
                Fed taper tantrum; gold crashes 28% on year
              </td>
            </tr>
            <tr style={style.ctblTr}>
              <td style={style.ctblTd}>
                <strong>2014</strong>
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $1,266
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $1,385
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $1,142
              </td>
              <td style={style.ctblTd}>
                Strong dollar, rising real yields weigh
              </td>
            </tr>
            <tr style={style.ctblTr}>
              <td style={style.ctblTd}>
                <strong>2015</strong>
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $1,160
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $1,296
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $1,049
              </td>
              <td style={style.ctblTd}>
                Dollar strength; gold near 5-year lows
              </td>
            </tr>
            <tr style={style.ctblTr}>
              <td style={style.ctblTd}>
                <strong>2016</strong>
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $1,251
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $1,375
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $1,077
              </td>
              <td style={style.ctblTd}>
                Brexit shock boosts gold; year ends flat
              </td>
            </tr>
            <tr style={style.ctblTr}>
              <td style={style.ctblTd}>
                <strong>2017</strong>
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $1,257
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $1,349
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $1,151
              </td>
              <td style={style.ctblTd}>
                Quiet year; crypto draws attention away
              </td>
            </tr>
            <tr style={style.ctblTr}>
              <td style={style.ctblTd}>
                <strong>2018</strong>
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $1,268
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $1,360
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $1,174
              </td>
              <td style={style.ctblTd}>Rising rates, strong dollar cap gold</td>
            </tr>
            <tr style={style.ctblTr}>
              <td style={style.ctblTd}>
                <strong>2019</strong>
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $1,393
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $1,549
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $1,270
              </td>
              <td style={style.ctblTd}>
                Fed pivots dovish; gold breaks $1,500
              </td>
            </tr>
            <tr style={style.ctblTr}>
              <td style={style.ctblTd}>
                <strong>2020</strong>
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $1,770
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                <strong>$2,067</strong>
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $1,477
              </td>
              <td style={style.ctblTd}>
                COVID crash, then ATH: negative real rates, massive QE
              </td>
            </tr>
            <tr style={style.ctblTr}>
              <td style={style.ctblTd}>
                <strong>2021</strong>
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $1,799
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $1,955
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $1,683
              </td>
              <td style={style.ctblTd}>
                Inflation rising; gold disappoints as crypto surges
              </td>
            </tr>
            <tr style={style.ctblTr}>
              <td style={style.ctblTd}>
                <strong>2022</strong>
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $1,801
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $2,050
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $1,614
              </td>
              <td style={style.ctblTd}>
                Russia-Ukraine; Fed hikes aggressively; CB buying 1,136t
              </td>
            </tr>
            <tr style={style.ctblTr}>
              <td style={style.ctblTd}>
                <strong>2023</strong>
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $1,941
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $2,135
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $1,811
              </td>
              <td style={style.ctblTd}>
                Banking stress (SVB); CB buying 1,051t; +13% on year
              </td>
            </tr>
            <tr style={style.ctblTr}>
              <td style={style.ctblTd}>
                <strong>2024</strong>
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $2,386
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $2,787
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $1,994
              </td>
              <td style={style.ctblTd}>
                CB buying 1,037t; Western ETF return begins; +27% on year
              </td>
            </tr>
            <tr style={style.ctblTr}>
              <td style={style.ctblTd}>
                <strong>2025</strong>
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $3,200
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                <strong>$4,389</strong>
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $2,580
              </td>
              <td style={style.ctblTd}>
                53 all-time highs; US ETF demand doubles; geopolitical risk
              </td>
            </tr>
            <tr style={{ ...style.ctblTr, background: "rgba(201,168,76,.06)" }}>
              <td style={style.ctblTd}>
                <strong>2026 YTD</strong>
              </td>
              <td
                className="mono"
                style={{
                  ...style.ctblTd,
                  ...style.mono,
                  color: style.tokens.goldD,
                }}
              >
                $4,728{" "}
                <span style={{ fontSize: "10px", color: style.tokens.muted }}>
                  (Apr 13)
                </span>
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                <strong style={{ color: style.tokens.goldD }}>$5,602</strong>
              </td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $4,315
              </td>
              <td style={style.ctblTd}>
                ATH Jan 28, 2026; US-Iran Hormuz conflict; -15% pullback to
                current
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p style={{ fontSize: "12px", color: style.tokens.muted }}>
        Sources: WGC Goldhub, LBMA historical price data, freegoldapi.com.
        Annual averages are approximate. ATH dates: Jan 21 2008 (~$1,011), Sep 6
        2011 ($1,921), Aug 7 2020 ($2,067), Dec 3 2023 ($2,135), Jan 28 2026
        ($5,602).
      </p>

      <div
        className="callout callout-gold"
        style={{ ...style.calloutGold, marginTop: "20px" }}
      >
        <div className="callout-icon" style={style.calloutIcon}>
          &#x1F4C8;
        </div>
        <div>
          <p className="callout-title" style={style.calloutTitle}>
            The inflation-adjusted picture
          </p>
          <p className="callout-text" style={style.calloutText}>
            Gold&rsquo;s famous 1980 peak of $850/oz is equivalent to roughly
            $3,200 in today&rsquo;s dollars when adjusted for CPI. The current
            price of $4,728 is materially <em>above</em> that real 1980 peak
            &mdash; meaning this bull market has already exceeded the previous
            inflation-adjusted record. The $35 price in 1971 (when free trading
            began) is approximately $270 in 2026 dollars. Gold&rsquo;s 55-year
            CAGR from free trading: roughly 8&ndash;9% nominal, about 4&ndash;5%
            real.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GoldPriceHistory;

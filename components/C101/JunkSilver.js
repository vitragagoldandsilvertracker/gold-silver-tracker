import React from "react";
import * as style from "./styles.js";

const JunkSilverSection = () => {
  return (
    <section className="sec prose" id="junk-silver" style={style.sec}>
      <p className="sec-label" style={style.secLabel}>
        Constitutional silver
      </p>
      <h2 style={style.secH2}>
        Junk Silver: Pre-1965 US Coins as a Silver Investment
      </h2>

      <p style={style.proseP}>
        &ldquo;Junk silver&rdquo; is a confusing name. The coins aren&rsquo;t
        junk. They&rsquo;re pre-1965 United States dimes, quarters, and half
        dollars that contain 90% pure silver &mdash; and they&rsquo;re one of
        the most efficient, divisible, and liquid ways to own physical silver.
        The name just means they have no numismatic collector premium above
        their metal content.
      </p>

      <h3 style={style.proseH3}>The history: why 1965?</h3>

      <p style={style.proseP}>
        From the founding of the US Mint in 1792 through 1964, American silver
        coins were struck in 90% silver and 10% copper &mdash; a composition
        that gave each coin genuine intrinsic value tied to its metal content.
        As silver prices rose through the 1960s, the melt value of these coins
        began approaching their face value. The government had a problem: people
        were hoarding coins rather than spending them (Gresham&rsquo;s Law: bad
        money drives out good). President Johnson signed the Coinage Act of
        1965, switching dimes and quarters to copper-nickel clad composition
        entirely. Half dollars were reduced to 40% silver from 1965 through
        1970, then also went clad in 1971. The last silver circulated US coinage
        was struck in 1964. Today that 1964 coin &mdash; worth 25 cents in 1964
        &mdash; contains about $17 worth of silver at current prices.
      </p>

      <h3 style={style.proseH3}>The math: calculating melt value</h3>

      <p style={style.proseP}>
        The key fact:{" "}
        <strong style={style.prosePStrong}>
          every $1.00 in face value of 90% silver coins contains 0.715 troy
          ounces of pure silver
        </strong>
        , regardless of denomination. One dime, two nickels' worth, or fractions
        of a quarter &mdash; the silver content per dollar of face value is the
        same. At $73/oz spot, the melt value formula is:
      </p>

      <div
        style={{
          background: "var(--gold-t)",
          border: "1px solid rgba(201,168,76,.25)",
          borderRadius: "var(--r)",
          padding: "16px 20px",
          margin: "16px 0",
          fontFamily: "'DM Mono', monospace",
          fontSize: "13px",
        }}
      >
        Melt value = face value &times; 0.715 &times; spot price
        <br />
        <span style={{ color: "var(--muted)", fontSize: "11px" }}>
          At $73/oz: $1 FV = 0.715 &times; $73 ={" "}
          <strong style={{ color: "var(--gold-d)" }}>$52.20</strong>
        </span>
      </div>

      <div style={{ overflowX: "auto" }}>
        <table className="ctbl" style={{ ...style.ctbl, ...style.tableWrapper }}>
          <thead>
            <tr style={style.ctblTr}>
              <th style={style.ctblTh}>Coin</th>
              <th style={style.ctblTh}>Face value</th>
              <th style={style.ctblTh}>Silver content</th>
              <th style={style.ctblTh}>Melt value at $73/oz</th>
              <th style={style.ctblTh}>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr style={style.ctblTr}>
              <td style={style.ctblTd}>
                <strong>Roosevelt Dime (pre-1965)</strong>
              </td>
              <td style={style.ctblTd}>$0.10</td>
              <td style={style.ctblTd}>0.0715 oz</td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $5.22
              </td>
              <td style={style.ctblTd}>Most common; buy by the roll</td>
            </tr>
            <tr style={style.ctblTr}>
              <td style={style.ctblTd}>
                <strong>Washington Quarter (pre-1965)</strong>
              </td>
              <td style={style.ctblTd}>$0.25</td>
              <td style={style.ctblTd}>0.1788 oz</td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $13.05
              </td>
              <td style={style.ctblTd}>Good all-around denomination</td>
            </tr>
            <tr style={style.ctblTr}>
              <td style={style.ctblTd}>
                <strong>Franklin/Kennedy Half (1964 only 90%)</strong>
              </td>
              <td style={style.ctblTd}>$0.50</td>
              <td style={style.ctblTd}>0.3575 oz</td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $26.10
              </td>
              <td style={style.ctblTd}>
                Kennedy 1964 = 90%; 1965&ndash;70 = 40%
              </td>
            </tr>
            <tr style={style.ctblTr}>
              <td style={style.ctblTd}>
                <strong>Kennedy Half (1965&ndash;1970)</strong>
              </td>
              <td style={style.ctblTd}>$0.50</td>
              <td style={style.ctblTd}>0.1479 oz</td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $10.80
              </td>
              <td style={style.ctblTd}>
                Only 40% silver &mdash; separate category
              </td>
            </tr>
            <tr style={style.ctblTr}>
              <td style={style.ctblTd}>
                <strong>Morgan / Peace Dollar (pre-1936)</strong>
              </td>
              <td style={style.ctblTd}>$1.00</td>
              <td style={style.ctblTd}>0.7734 oz</td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $56.46
              </td>
              <td style={style.ctblTd}>
                90% silver; often carry small numismatic premium
              </td>
            </tr>
            <tr style={style.ctblTr}>
              <td style={style.ctblTd}>
                <strong>War Nickel (1942&ndash;1945)</strong>
              </td>
              <td style={style.ctblTd}>$0.05</td>
              <td style={style.ctblTd}>0.0563 oz</td>
              <td className="mono" style={{ ...style.ctblTd, ...style.mono }}>
                $4.11
              </td>
              <td style={style.ctblTd}>
                35% silver; identified by large mint mark above Monticello
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 style={style.proseH3}>
        Why junk silver has advantages over modern bullion
      </h3>

      <p style={style.proseP}>
        <strong style={style.prosePStrong}>Lower premiums.</strong> Bags of
        mixed 90% coins typically trade at 3&ndash;8% over spot. A 1 oz American
        Silver Eagle usually carries a 15&ndash;25% premium. For investors who
        want maximum ounces per dollar, junk silver wins.
      </p>

      <p style={style.proseP}>
        <strong style={style.prosePStrong}>Divisibility.</strong> A 1 oz Silver
        Eagle is all-or-nothing. A bag of dimes lets you sell $5.22 worth of
        silver at a time. In a barter or liquidity scenario where you need to
        exchange small amounts, junk silver&rsquo;s divisibility is a genuine
        practical advantage.
      </p>

      <p style={style.proseP}>
        <strong style={style.prosePStrong}>Instant recognizability.</strong> US
        government-minted coins are universally trusted and identifiable. No one
        is going to question whether a 1964 Roosevelt dime is real silver.
      </p>

      <p style={style.proseP}>
        <strong style={style.prosePStrong}>No wash sale rule.</strong> Same as
        all physical silver &mdash; you can harvest losses and immediately
        re-enter without waiting 30 days.
      </p>

      <h3 style={style.proseH3}>
        Quick identification: is your old coin silver?
      </h3>
      <p style={style.proseP}>
        Look at the edge of a quarter or dime. Pre-1965 silver coins have a
        solid silver-gray edge. Post-1965 clad coins show a copper stripe
        through the middle of the edge. That&rsquo;s the fastest no-test way to
        identify silver coinage.
      </p>
    </section>
  );
};

export default JunkSilverSection;

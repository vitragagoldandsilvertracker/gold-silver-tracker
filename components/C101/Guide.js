import React from "react";
import * as style from "./styles.js";

const MoreGuidesSection = () => {
  return (
    <section className="sec prose" id="more-guides" style={style.sec}>
      <p className="sec-label" style={style.secLabel}>
        Additional guides
      </p>
      <h2 style={style.secH2}>
        How to Store Gold at Home &mdash; and When to Use a Vault
      </h2>

      <p style={style.proseP}>
        Storage is the part of physical gold ownership that most people
        underestimate until something goes wrong. A few practical principles:
      </p>

      <p style={style.proseP}>
        <strong style={style.prosePStrong}>Home safe.</strong> For holdings
        under $25,000&ndash;$50,000, a quality home safe provides reasonable
        security. The safe should be bolted to the floor or wall (unbolted safes
        can be carried out), rated for at least 30 minutes of fire protection
        (gold itself doesn&rsquo;t melt until 1,948&deg;F but paper insurance
        documents are more vulnerable), and weigh enough that moving it requires
        tools. A TL-15 or TL-30 rated safe provides meaningful burglary
        resistance. Budget: $500&ndash;$2,000 for a solid residential-grade
        model. <em style={style.proseI}>Tell your insurance broker</em> &mdash;
        standard homeowners policies typically cover only $500&ndash;$2,000 of
        precious metals. A rider or scheduled personal property endorsement is
        needed for larger holdings.
      </p>

      <p style={style.proseP}>
        <strong style={style.prosePStrong}>
          Private vault or allocated storage.
        </strong>{" "}
        For larger holdings, third-party vaults (Delaware Depository,
        Brink&rsquo;s Global Services, Loomis, International Depository
        Services) offer professional storage with insurance included. Costs run
        $100&ndash;$300/year for non-segregated storage, $150&ndash;$500/year
        for segregated. Segregated means your specific bars are stored
        separately and returned to you; non-segregated means you get equivalent
        metal back, not necessarily your exact bars.
      </p>

      <p style={style.proseP}>
        <strong style={style.prosePStrong}>Safety deposit box.</strong>{" "}
        Accessible, but carries limitations: bank hours restrict access, most
        banks disclaim responsibility for box contents (FDIC doesn&rsquo;t cover
        safe deposit boxes), and boxes are theoretically subject to seizure or
        freeze orders affecting the account holder. Adequate for a small amount;
        not recommended as the primary storage for a significant position.
      </p>

      <h2 style={{ ...style.secH2, marginTop: "36px" }}>
        Gold Coins: Eagle vs Maple Leaf vs Buffalo vs Krugerrand
      </h2>

      <p style={style.proseP}>
        These four coins dominate the global bullion market. All are
        government-issued, broadly recognized, and liquid. The differences
        matter for buyers:
      </p>

      <div style={{ overflowX: "auto" }}>
        <table className="ctbl" style={{ ...style.ctbl, ...style.tableWrapper }}>
          <thead>
            <tr style={style.ctblTr}>
              <th style={style.ctblTh}>Coin</th>
              <th style={style.ctblTh}>Country</th>
              <th style={style.ctblTh}>Purity</th>
              <th style={style.ctblTh}>Weight</th>
              <th style={style.ctblTh}>IRA eligible?</th>
              <th style={style.ctblTh}>Best for</th>
            </tr>
          </thead>
          <tbody>
            <tr style={style.ctblTr}>
              <td style={style.ctblTd}>
                <strong>American Gold Eagle</strong>
              </td>
              <td style={style.ctblTd}>US Mint</td>
              <td style={style.ctblTd}>
                91.67% (22K) &mdash; 1 oz total, 1 oz gold content
              </td>
              <td style={style.ctblTd}>33.93g</td>
              <td style={style.ctblTd}>
                <span className="tag tag-grn" style={style.tagGrn}>
                  Yes
                </span>
              </td>
              <td style={style.ctblTd}>
                US investors; most liquid domestically; IRA eligible via
                statutory exception
              </td>
            </tr>
            <tr style={style.ctblTr}>
              <td style={style.ctblTd}>
                <strong>Canadian Maple Leaf</strong>
              </td>
              <td style={style.ctblTd}>Royal Canadian Mint</td>
              <td style={style.ctblTd}>.9999 fine (24K)</td>
              <td style={style.ctblTd}>31.10g</td>
              <td style={style.ctblTd}>
                <span className="tag tag-grn" style={style.tagGrn}>
                  Yes
                </span>
              </td>
              <td style={style.ctblTd}>
                Investors who want 99.99% purity; strong global recognition
              </td>
            </tr>
            <tr style={style.ctblTr}>
              <td style={style.ctblTd}>
                <strong>American Gold Buffalo</strong>
              </td>
              <td style={style.ctblTd}>US Mint</td>
              <td style={style.ctblTd}>.9999 fine (24K)</td>
              <td style={style.ctblTd}>31.10g</td>
              <td style={style.ctblTd}>
                <span className="tag tag-grn" style={style.tagGrn}>
                  Yes
                </span>
              </td>
              <td style={style.ctblTd}>
                US investors wanting 99.99% purity; IRA eligible
              </td>
            </tr>
            <tr style={style.ctblTr}>
              <td style={style.ctblTd}>
                <strong>South African Krugerrand</strong>
              </td>
              <td style={style.ctblTd}>SA Mint</td>
              <td style={style.ctblTd}>91.67% (22K) &mdash; same as Eagle</td>
              <td style={style.ctblTd}>33.93g</td>
              <td style={style.ctblTd}>
                <span className="tag tag-red" style={style.tagRed}>
                  No
                </span>
              </td>
              <td style={style.ctblTd}>
                International market; historically lower premiums;{" "}
                <em style={style.proseI}>not</em> IRA eligible
              </td>
            </tr>
            <tr style={style.ctblTr}>
              <td style={style.ctblTd}>
                <strong>Austrian Philharmonic</strong>
              </td>
              <td style={style.ctblTd}>Austrian Mint</td>
              <td style={style.ctblTd}>.9999 fine (24K)</td>
              <td style={style.ctblTd}>31.10g</td>
              <td style={style.ctblTd}>
                <span className="tag tag-grn" style={style.tagGrn}>
                  Yes
                </span>
              </td>
              <td style={style.ctblTd}>
                European investors; popular globally; IRA eligible
              </td>
            </tr>
            <tr style={style.ctblTr}>
              <td style={style.ctblTd}>
                <strong>Australian Gold Kangaroo</strong>
              </td>
              <td style={style.ctblTd}>Perth Mint</td>
              <td style={style.ctblTd}>.9999 fine (24K)</td>
              <td style={style.ctblTd}>31.10g</td>
              <td style={style.ctblTd}>
                <span className="tag tag-grn" style={style.tagGrn}>
                  Yes
                </span>
              </td>
              <td style={style.ctblTd}>
                Asia-Pacific focus; Perth Mint government guarantee; IRA
                eligible
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p style={{ fontSize: "12px", color: "var(--muted)", marginTop: "8px" }}>
        For IRA eligibility, all coins above .995 fine qualify except the
        American Gold Eagle, which is IRA-eligible via a specific congressional
        exception despite being 22K. Krugerrands are also 22K but have no such
        exception.
      </p>

      <h2 style={{ ...style.secH2, marginTop: "36px" }}>
        Is Gold a Good Investment in 2026?
      </h2>

      <p style={style.proseP}>
        Direct answer: it depends on what you&rsquo;re comparing it to and your
        investment horizon.
      </p>

      <p style={style.proseP}>
        Gold has significantly outperformed US equities over the past 12 months
        &mdash; up ~47% while the S&amp;P 500 is down roughly 8% year-to-date in
        2026. Over the past five years it has compounded at about 24% annually.
        On those metrics, yes, it&rsquo;s been a very good investment.
      </p>

      <p style={style.proseP}>
        The honest counterpoint: over the past 40 years, a diversified equity
        portfolio has substantially outperformed gold. If you had put $10,000 in
        the S&amp;P 500 in 1985, it would be worth roughly $950,000 today with
        dividends reinvested. The same $10,000 in gold would be worth about
        $140,000. Long-horizon equity investors have significantly outperformed
        gold investors over that period.
      </p>

      <p style={style.proseP}>
        The case for owning some gold in 2026 is specific: US fiscal debt is
        above 120% of GDP with no credible path to reduction; the dollar has
        weakened 8% year-to-date; CPI came in at 3.3% annualized in March 2026,
        the highest since 2024; and the geopolitical environment &mdash; US-Iran
        tensions, de-dollarization momentum among EM central banks &mdash; has
        structural drivers that weren&rsquo;t present in the 1990s or 2010s.
        These factors support a modest portfolio allocation, not an all-in
        position.
      </p>

      <p style={style.proseP}>
        The case against: gold doesn&rsquo;t pay a dividend or generate
        earnings. At $4,728/oz after a 47% YoY gain, momentum investors are
        already long. The Strait of Hormuz ceasefire that caused the January
        2026 spike is fragile but holding. If it holds and inflation moderates,
        gold could consolidate for an extended period while equities recover.
        That wouldn&rsquo;t make gold &ldquo;bad&rdquo; &mdash; it would just be
        gold doing what it normally does: providing insurance at the cost of
        some opportunity.
      </p>

      <p style={style.proseP}>
        <strong style={style.prosePStrong}>
          Recommended allocation for a general investor: 5&ndash;10% of total
          portfolio.
        </strong>{" "}
        Enough to provide meaningful diversification in a downturn. Not so much
        that underperformance in equity bull markets becomes costly.
      </p>

      <h2 style={{ ...style.secH2, marginTop: "36px" }}>
        How to Sell Gold &mdash; Getting a Fair Price
      </h2>

      <p style={style.proseP}>
        Selling physical gold is straightforward once you understand the market
        structure. The key is knowing what the metal is worth (spot price)
        before walking into any conversation.
      </p>

      <p style={style.proseP}>
        <strong style={style.prosePStrong}>Online bullion dealers</strong>{" "}
        (APMEX, JM Bullion, SD Bullion) typically offer the most competitive buy
        prices for common coins and bars &mdash; usually 1&ndash;3% below spot
        for 1 oz coins. Process: get a quote online, ship insured with tracking,
        receive payment by check or wire within 2&ndash;5 business days. Best
        for: standard bullion products you bought from a dealer.
      </p>

      <p style={style.proseP}>
        <strong style={style.prosePStrong}>Local coin shops</strong> offer
        immediate payment and no shipping risk. Prices are typically 2&ndash;5%
        below spot. Quality varies widely &mdash; call ahead, get quotes from
        two or three shops, and compare against the online dealer quote before
        committing. Best for: small amounts where shipping cost makes online
        selling impractical, or situations where you want cash in hand same day.
      </p>

      <p style={style.proseP}>
        <strong style={style.prosePStrong}>eBay and Craigslist</strong> can
        yield prices above dealer buyback because you&rsquo;re selling directly
        to collectors. eBay gold coins regularly sell at or slightly above spot
        for desirable products. The downsides: eBay&rsquo;s fees run
        12&ndash;13% of the sale price, buyers can be difficult, and
        shipping/insurance adds cost. Craigslist is cash-only and carries
        personal safety considerations &mdash; always meet in a bank lobby or
        police station for transactions above $500.
      </p>

      <p style={style.proseP}>
        <strong style={style.prosePStrong}>Pawn shops</strong> are a last
        resort. They typically pay 50&ndash;70% of melt value. Use the melt
        value calculator above, compare what you&rsquo;re being offered, and
        walk out if the offer is below 85% of melt. If a dealer offers
        dramatically below spot, they&rsquo;re assuming you don&rsquo;t know the
        market price &mdash; now you do.
      </p>
    </section>
  );
};

export default MoreGuidesSection;

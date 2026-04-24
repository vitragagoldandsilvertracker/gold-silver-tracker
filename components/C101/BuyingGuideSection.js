import React from "react";
import * as style from "./styles.js";

const BuyingGuideSection = () => {
  return (
    <section className="sec prose" id="buying-guide" style={style.sec}>
      <p className="sec-label" style={style.secLabel}>
        Section 8
      </p>
      <h2 style={style.secH2}>Practical Buying Guide</h2>

      <h3 style={style.proseH3}>How much to allocate</h3>

      <p style={style.proseP}>
        Most financial advisors suggest 5&ndash;10% of a total portfolio in
        gold, though that range is soft. The World Gold Council has published
        research showing that even a 2&ndash;10% allocation historically
        improved risk-adjusted returns because gold&rsquo;s low correlation to
        stocks and bonds provides meaningful diversification in a broad
        portfolio. Some investors who are deeply concerned about dollar
        debasement or systemic financial risk hold 15&ndash;20%; that&rsquo;s a
        legitimate choice but moves the allocation from diversification into a
        directional bet on gold outperforming.
      </p>

      <p style={style.proseP}>
        There is no mathematical answer because the right allocation depends on
        conviction, time horizon, and what the rest of the portfolio contains.
        As a practical starting point: if you have no gold exposure at all and
        want some, a 5% allocation in a mostly-equity portfolio gives you
        meaningful diversification without overweighting a non-yielding asset.
      </p>

      <h3 style={style.proseH3}>Dollar cost averaging vs. lump sum</h3>

      <p style={style.proseP}>
        If you&rsquo;re buying physical gold with a budget, dollar cost
        averaging (buying a fixed amount monthly regardless of price) removes
        the stress of timing. For ETFs in a brokerage account, lump-sum
        investment has historically outperformed DCA roughly two-thirds of the
        time in backtests, because markets generally go up and waiting means
        missing gains. In practice, many people find DCA easier to execute
        psychologically, especially when prices are volatile. Use whichever
        approach you&rsquo;ll actually stick to.
      </p>

      <h3 style={style.proseH3}>Understanding premiums when buying physical</h3>

      <p style={style.proseP}>
        The premium is the markup above spot price that you pay when buying
        physical gold. It covers the dealer&rsquo;s cost of acquiring, handling,
        shipping, and making a profit. Some rough benchmarks:
      </p>

      <ul style={style.proseUl}>
        <li style={style.proseLi}>
          <strong style={style.prosePStrong}>1 oz Gold Eagle (US Mint):</strong>{" "}
          typically 4&ndash;7% over spot for bullion; higher for proof versions
        </li>
        <li style={style.proseLi}>
          <strong style={style.prosePStrong}>1 oz Canadian Maple Leaf:</strong>{" "}
          typically 3&ndash;6% over spot
        </li>
        <li style={style.proseLi}>
          <strong style={style.prosePStrong}>10 oz bar:</strong> typically
          1.5&ndash;3% over spot
        </li>
        <li style={style.proseLi}>
          <strong style={style.prosePStrong}>1 kg bar:</strong> typically
          0.5&ndash;2% over spot
        </li>
        <li style={style.proseLi}>
          <strong style={style.prosePStrong}>
            Fractional coins (1/4 oz, 1/10 oz):
          </strong>{" "}
          typically 10&ndash;20% over spot &mdash; expensive per ounce
        </li>
      </ul>

      <p style={style.proseP}>
        Premiums widen during periods of high physical demand (as happened in
        January 2026). Buy when premiums are reasonable, not at peak premium
        spikes.
      </p>

      <h3 style={style.proseH3}>Where to buy &mdash; and where not to</h3>

      <p style={style.proseP}>
        Reputable dealers for physical gold include APMEX, JM Bullion, SD
        Bullion, and Kitco, among others. Local coin shops can work well if you
        know the dealer and understand the pricing. Check spot price on a site
        like ours before walking in.
      </p>

      <p style={style.proseP}>
        Avoid: airport gold kiosks (massive premiums), TV infomercial gold
        companies (premium and quality concerns), social media ad gold (frequent
        scams), and any dealer pressing you to buy collectible or numismatic
        coins as an &ldquo;investment&rdquo; (the premiums are enormous and the
        markup to re-sell is devastating).
      </p>

      <h3 style={style.proseH3}>Red flags when buying physical</h3>
      <ul style={style.proseUl}>
        <li style={style.proseLi}>
          Seller claims gold coins have numismatic premiums and will appreciate
          beyond spot (possible, but requires expertise to evaluate)
        </li>
        <li style={style.proseLi}>
          Seller insists on payment by wire transfer only, no returns
        </li>
        <li style={style.proseLi}>
          Price significantly below market (fakes exist, especially 1kg
          gold-plated tungsten bars)
        </li>
        <li style={style.proseLi}>
          Any pressure to decide immediately or &ldquo;lock in this price&rdquo;
        </li>
        <li style={style.proseLi}>
          Claims about &ldquo;rare&rdquo; coins that are actually mass-produced
          bullion
        </li>
      </ul>

      <p style={style.proseP}>
        Large purchases ($10,000+) from reputable dealers typically include
        authentication with the product. If buying from a private seller, a
        portable XRF analyzer or ultrasound testing is the only reliable way to
        verify without assay. Weight and density tests catch most fakes but not
        sophisticated ones. When in doubt, buy from mint-sealed products from
        established dealers.
      </p>
    </section>
  );
};

export default BuyingGuideSection;

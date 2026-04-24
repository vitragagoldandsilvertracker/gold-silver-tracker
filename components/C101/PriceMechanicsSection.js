import React from "react";
import * as style from "./styles.js";

const PriceMechanicsSection = () => {
  return (
    <section style={style.sec} id="how-price-works">
      <p style={style.secLabel}>Section 2</p>
      <h2 style={style.secH2}>How the Gold Price Works</h2>

      <p style={style.proseP}>
        The &ldquo;gold price&rdquo; you see on a screen is the{" "}
        <strong style={style.prosePStrong}>spot price</strong> &mdash; the price
        for one troy ounce of gold deliverable immediately in the wholesale
        market. It&rsquo;s not a price you can actually transact at as a retail
        buyer; it&rsquo;s more like a benchmark. When you buy a Gold Eagle from
        a dealer, you pay spot plus a premium. When you buy GLD, the ETF trades
        at a price that tracks spot very closely but reflects its own supply and
        demand.
      </p>

      <h3 style={style.secH3}>Spot price vs the LBMA fix vs futures</h3>

      <p style={style.proseP}>
        There are actually three gold prices that matter, and they&rsquo;re
        often confused:
      </p>

      <p style={style.proseP}>
        <strong style={style.prosePStrong}>The spot price</strong> is derived
        continuously from the COMEX futures market and wholesale
        over-the-counter (OTC) trading in London. It&rsquo;s the live price you
        see on sites like ours, updated throughout the trading day.
      </p>

      <p style={style.proseP}>
        <strong style={style.prosePStrong}>The LBMA Gold Price</strong> (the
        &ldquo;fix&rdquo;) is an electronic auction held twice daily at 10:30 am
        and 3:00 pm London time, administered by ICE Benchmark Administration.
        This is the benchmark used in the physical gold market by miners,
        refiners, central banks, and large institutions for settling contracts.
        When you see a gold price in the Wall Street Journal the next morning,
        it&rsquo;s typically the LBMA PM fix from the prior day.
      </p>

      <p style={style.proseP}>
        <strong style={style.prosePStrong}>COMEX futures</strong> are contracts
        to buy or sell gold at a set price on a future date. They typically
        trade at a slight premium to spot (called &ldquo;contango&rdquo;)
        reflecting financing and storage costs. When futures trade{" "}
        <em>below</em> spot (called &ldquo;backwardation&rdquo;), it usually
        signals immediate physical demand exceeding supply &mdash; a meaningful
        stress indicator. In early 2026, London loco gold briefly went into
        backwardation as metal flowed from London to New York ahead of potential
        tariff announcements.
      </p>

      <h3 style={style.secH3}>
        Gold price per gram &mdash; the useful conversion
      </h3>
      <p style={style.proseP}>
        Most gold jewelry is quoted and sold by the gram, not the troy ounce. At
        the current spot price of $4,728/oz, here&rsquo;s what each karat of
        gold is worth per gram:
      </p>

      <table style={{ ...style.ctbl, ...style.tableWrapper }}>
        <thead>
          <tr>
            <th style={style.ctblTh}>Karat</th>
            <th style={style.ctblTh}>Purity</th>
            <th style={style.ctblTh}>Per gram (USD)</th>
            <th style={style.ctblTh}>Per 10g</th>
            <th style={style.ctblTh}>Per oz</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={style.ctblTd}>
              <strong style={style.ctblStrong}>24K</strong>
            </td>
            <td style={style.ctblTd}>99.9% pure</td>
            <td style={{ ...style.ctblTd, ...style.ctblMono }}>
              <strong style={style.ctblStrong}>$152.05</strong>
            </td>
            <td style={{ ...style.ctblTd, ...style.ctblMono }}>$1,520</td>
            <td style={{ ...style.ctblTd, ...style.ctblMono }}>$4,728</td>
          </tr>
          <tr>
            <td style={style.ctblTd}>
              <strong style={style.ctblStrong}>22K</strong>
            </td>
            <td style={style.ctblTd}>91.7% pure</td>
            <td style={{ ...style.ctblTd, ...style.ctblMono }}>$139.43</td>
            <td style={{ ...style.ctblTd, ...style.ctblMono }}>$1,394</td>
            <td style={{ ...style.ctblTd, ...style.ctblMono }}>$4,336</td>
          </tr>
          <tr>
            <td style={style.ctblTd}>
              <strong style={style.ctblStrong}>18K</strong>
            </td>
            <td style={style.ctblTd}>75.0% pure</td>
            <td style={{ ...style.ctblTd, ...style.ctblMono }}>$114.04</td>
            <td style={{ ...style.ctblTd, ...style.ctblMono }}>$1,140</td>
            <td style={{ ...style.ctblTd, ...style.ctblMono }}>$3,546</td>
          </tr>
          <tr>
            <td style={style.ctblTd}>
              <strong style={style.ctblStrong}>14K</strong>
            </td>
            <td style={style.ctblTd}>58.3% pure</td>
            <td style={{ ...style.ctblTd, ...style.ctblMono }}>$88.64</td>
            <td style={{ ...style.ctblTd, ...style.ctblMono }}>$886</td>
            <td style={{ ...style.ctblTd, ...style.ctblMono }}>$2,757</td>
          </tr>
          <tr>
            <td style={style.ctblTd}>
              <strong style={style.ctblStrong}>10K</strong>
            </td>
            <td style={style.ctblTd}>41.7% pure</td>
            <td style={{ ...style.ctblTd, ...style.ctblMono }}>$63.41</td>
            <td style={{ ...style.ctblTd, ...style.ctblMono }}>$634</td>
            <td style={{ ...style.ctblTd, ...style.ctblMono }}>$1,972</td>
          </tr>
        </tbody>
      </table>
      <p style={{ fontSize: "12px", color: style.tokens.muted }}>
        Formula: spot price &divide; 31.1035 (grams per troy oz) &times; purity
        percentage. These are melt values &mdash; what a dealer pays to refine
        the metal. Jewelry resale will be lower.
      </p>

      <div style={style.calloutBlue}>
        <div style={style.calloutIcon}>&#x1F4D0;</div>
        <div>
          <p style={style.calloutTitle}>Troy ounce vs regular ounce</p>
          <p style={style.calloutText}>
            A troy ounce is 31.1035 grams. A regular (avoirdupois) ounce is
            28.35 grams. Gold is always quoted in troy ounces. When someone says
            &ldquo;gold is $4,728 an ounce,&rdquo; they mean a troy ounce. If
            you calculated from a regular ounce you&rsquo;d be off by about 10%.
          </p>
        </div>
      </div>

      <h3 style={style.secH3}>What actually moves the gold price</h3>

      <p style={style.proseP}>
        <strong style={style.prosePStrong}>
          Real interest rates are the primary driver.
        </strong>{" "}
        Specifically, the 10-year Treasury Inflation-Protected Securities (TIPS)
        yield, which the Fed tracks as series DFII10. When real yields fall
        &mdash; meaning bonds are paying less after inflation &mdash; the
        opportunity cost of holding gold (which pays no yield) also falls,
        making gold relatively more attractive. From 2020 to 2022, real yields
        went deeply negative, and gold was above $2,000. As the Fed raised rates
        aggressively in 2022-2023, real yields turned positive and gold dipped.
        The traditional relationship has since broken down somewhat (more on why
        below), but it remains the best single predictor.
      </p>

      <p style={style.proseP}>
        <strong style={style.prosePStrong}>
          The US dollar is the second lever.
        </strong>{" "}
        Gold is priced in dollars. When the dollar weakens, gold buys more
        dollars, so its price rises in dollar terms &mdash; even if nothing has
        changed about gold itself. The correlation between the DXY (dollar
        index) and gold is consistently negative over most time horizons. The
        dollar is currently at 99.84 on the DXY, down from 107 earlier in 2026
        &mdash; a meaningful tailwind for gold.
      </p>

      <p style={style.proseP}>
        <strong style={style.prosePStrong}>Central bank buying.</strong> This is
        the structural shift that explains why gold broke from its traditional
        relationship with yields after 2022. Central banks &mdash; particularly
        in emerging markets &mdash; bought over 1,000 tonnes of gold per year in
        2022, 2023, and 2024. That&rsquo;s roughly double the pre-2022 pace. The
        World Gold Council full-year 2025 data shows total gold demand including
        OTC transactions exceeded 5,000 tonnes, with 53 all-time price highs
        during the year. These buyers are not sensitive to yield differentials.
        They&rsquo;re building reserves outside the dollar system &mdash; a
        structural trend that doesn&rsquo;t reverse quickly.
      </p>

      <p style={style.proseP}>
        <strong style={style.prosePStrong}>
          Geopolitics and financial uncertainty.
        </strong>{" "}
        Gold functions as insurance against tail risks: financial crises, wars,
        currency collapses. The US-Iran conflict that escalated in early 2026,
        disrupting the Strait of Hormuz and spiking inflation expectations, was
        a direct catalyst for the January 2026 price surge. This driver is
        inherently unpredictable, but it compounds when it arrives.
      </p>

      <h3 style={style.secH3}>The gold/silver ratio explained</h3>
      <p style={style.proseP}>
        The gold/silver ratio is simply the gold price divided by the silver
        price. Right now: $4,728 ÷ $73 = 64.8. That means it takes 64.8 ounces
        of silver to buy one ounce of gold.
      </p>

      <p style={style.proseP}>
        The long-run historical average is roughly 67x. The ratio peaked at 125x
        in March 2020 during COVID panic-selling of silver. It compressed to
        64.8x by April 2026 as silver surged in 2025 on physical shortage
        signals and industrial demand. Investors often use the ratio as a
        relative-value tool: when it’s far above historical average, silver
        looks cheap relative to gold, and vice versa. At 64.8x, the ratio is
        roughly at its historical mean — no extreme signal in either direction.
      </p>

      <div style={style.dataBanner}>
        <div>
          <p style={style.dbLabel}>Live data</p>
          <p style={style.dbTitle}>
            See all price charts, COMEX inventory &amp; macro drivers
          </p>
          <p style={style.dbSub}>
            42 free data sources &middot; Updated daily &middot; G/S ratio chart
            &middot; FRED overlays
          </p>
        </div>
        <a href="/data/" style={style.dbBtn}>
          View Data Page &rarr;
        </a>
      </div>
    </section>
  );
};

export default PriceMechanicsSection;

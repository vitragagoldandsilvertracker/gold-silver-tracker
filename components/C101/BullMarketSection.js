import React from "react";
import * as style from "./styles.js";

const BullMarketSection = () => {
  return (
    <section className="sec prose" id="bull-market" style={style.sec}>
      <p className="sec-label" style={style.secLabel}>
        Section 5
      </p>
      <h2 style={style.secH2}>
        What Drove Gold to $5,600? The 2024&ndash;2026 Bull Market
      </h2>

      <p style={style.proseP}>
        The gold bull market of 2024&ndash;2026 was not a repeat of previous
        cycles. It wasn&rsquo;t driven primarily by retail investors panicking,
        negative real yields turning extremely negative, or a single
        geopolitical shock. It was driven by a structural shift in who buys gold
        and why &mdash; and understanding that shift matters for the road ahead.
      </p>

      <h3 style={style.proseH3}>
        Driver 1: Central banks broke the historical buying record
      </h3>

      <p style={style.proseP}>
        From 1990 to 2010, central banks were net <em>sellers</em> of gold.
        European central banks in particular were unloading reserves, driving
        gold lower and prompting the Central Bank Gold Agreement of 1999 to
        manage the selling. The post-2010 shift to net buying was gradual. The
        post-2022 surge was not gradual at all.
      </p>

      <p style={style.proseP}>
        Central banks bought 1,136 tonnes in 2022, 1,051 tonnes in 2023, and
        1,037 tonnes in 2024 &mdash; three consecutive years above 1,000 tonnes,
        a record pace. The buyers were mostly emerging market central banks:
        China, Poland, Turkey, India, and dozens of smaller buyers diversifying
        reserves away from US Treasury bonds and euros. The motivation was
        partly de-dollarization, partly the observation that Russia&rsquo;s
        foreign currency reserves (held in Western systems) were frozen in 2022
        following its invasion of Ukraine. That event was a lesson for every
        central bank outside the G7 sphere: if your reserves are in someone
        else&rsquo;s system, they can be confiscated. Gold, held in your own
        vault, cannot be.
      </p>

      <h3 style={style.proseH3}>
        Driver 2: US fiscal deterioration changed the long-run calculus
      </h3>

      <p style={style.proseP}>
        US federal debt as a percentage of GDP crossed 100% after COVID and has
        continued climbing, now above 120%. The Congressional Budget Office
        projects the debt continuing to grow faster than GDP for the foreseeable
        future. In the first half of fiscal 2026 alone, the US paid $529 billion
        in interest &mdash; nearly $88 billion per month. That&rsquo;s more than
        the entire defense budget for many countries.
      </p>

      <p style={style.proseP}>
        This matters for gold because the implicit logic of long-term dollar
        strength depends on fiscal credibility. When debt loads become this
        large, the incentive to inflate away the real value of debt becomes
        overwhelming. Whether or not the Fed actually chooses that path, the
        risk that it might &mdash; or be forced to &mdash; is priced into gold.
      </p>

      <h3 style={style.proseH3}>Driver 3: Western investors came back</h3>

      <p style={style.proseP}>
        From 2021 through most of 2024, Western gold ETF holdings were falling.
        North American and European funds were seeing outflows as high real
        interest rates made bonds attractive again. But in late 2024, those
        flows reversed. The World Gold Council data shows US gold demand more
        than doubled in 2025 to 679 tonnes, driven almost entirely by a surge in
        ETF buying. North American ETFs added 437 tonnes of gold during the year
        &mdash; bringing total US ETF gold holdings to a record 2,019 tonnes,
        with AUM exceeding $280 billion.
      </p>

      <p style={style.proseP}>
        That combination &mdash; persistent emerging market central bank buying
        plus a return of Western investment demand &mdash; is historically the
        most powerful setup for gold. Both buyer groups were active
        simultaneously in 2025 for the first time since the early 2010s bull
        market.
      </p>

      <h3 style={style.proseH3}>Where does it go from here?</h3>

      <p style={style.proseP}>
        The honest answer: nobody knows. Analysts have a spectacularly poor
        record of forecasting gold over any short or medium time horizon.
        Goldman Sachs and J.P. Morgan both projected prices averaging $5,055/oz
        by Q4 2026 as of year-end 2025 &mdash; targets that were exceeded and
        then given back in the January spike and subsequent pullback. MKS PAMP
        analyst Nicky Shiels projected $5,400 by end of 2026. The World Gold
        Council&rsquo;s scenario analysis shows a range of continued modest
        gains to significant upside depending on rate cut timing, geopolitical
        escalation, and the trajectory of the dollar.
      </p>

      <p style={style.proseP}>
        The structural forces that drove the 2024&ndash;2026 run haven&rsquo;t
        gone away. Central banks haven&rsquo;t stopped buying. US fiscal
        conditions aren&rsquo;t improving. The Strait of Hormuz disruption that
        spiked energy and inflation in early 2026 is paused, not resolved.
        Whether gold returns to $5,600 or consolidates around $4,500&ndash;5,000
        for an extended period is genuinely unknowable. The case for owning some
        remains intact regardless.
      </p>

      <div className="callout callout-gold" style={style.calloutGold}>
        <div className="callout-icon" style={style.calloutIcon}>
          &#x26A0;
        </div>
        <div>
          <p className="callout-title" style={style.calloutTitle}>
            A note on gold price forecasts
          </p>
          <p className="callout-text" style={style.calloutText}>
            In the LBMA&rsquo;s annual analyst forecasting competition for 2025,
            WGC analyst Nicky Shiels summarized the results this way:
            &ldquo;2025 is collectively the largest underestimate margin of
            error for all four metals in the LBMA&rsquo;s analyst polling
            history.&rdquo; Gold went from $2,600 at the start of the year to
            $5,602 at the peak &mdash; against a median analyst forecast of
            around $2,900. Professional forecasters don&rsquo;t have a reliable
            edge here. Don&rsquo;t make allocation decisions based primarily on
            price targets.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BullMarketSection;
